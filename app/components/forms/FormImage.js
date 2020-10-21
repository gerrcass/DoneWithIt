import React from "react";
import { useFormikContext } from "formik";

import ImageInput from "../ImageInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormImage({ icon }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <ImageInput icon={icon} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
