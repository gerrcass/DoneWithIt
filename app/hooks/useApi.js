import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);

  const request = async (...arg) => {
    setloading(true);
    const response = await apiFunc(...arg);
    setloading(false);

    setError(!response.ok);
    setData(response.data);

    return response;
  };

  return { data, error, loading, request };
};
