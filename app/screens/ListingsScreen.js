import React, { useEffect } from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";

//import ActivityIndicator from '../components/ActivityIndicator'
import AppText from "../components/Text";
import Card from "../components/Card";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import AppButton from "../components/Button";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      {/* <ActivityIndicator visible={true} /> */}
      <ActivityIndicator
        animating={loading}
        color="#777"
        size="large"
        style={[
          {
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            opacity: 0.8,
          },
          loading ? { zIndex: 1 } : { zIndex: 0 },
        ]}
      />
      <Screen style={styles.screen}>
        {error ? (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings}></AppButton>
          </>
        ) : (
          <>
            <FlatList
              data={listings}
              keyExtractor={(listings) => listings.id.toString()}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                  subtitle={"$" + item.price}
                  imageUrl={item.images[0].url}
                  thumbnailUrl={item.images[0].thumbnailUrl}
                  onPress={() =>
                    navigation.navigate(routes.LISTING_DETAILS, item)
                  }
                />
              )}
            />
          </>
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: defaultStyles.colors.light,
  },
});
