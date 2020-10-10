import React from "react";
//import { Text } from "react-native";

import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
//import Card from "./app/components/Card";
//import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
//import MessagesScreen from "./app/screens/MessagesScreen";
//import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  //return <ListingDetailsScreen />;
  //return <ViewImageScreen />;
  //return <MessagesScreen />;
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}
