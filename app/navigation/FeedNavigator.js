import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Listings" component={ListingsScreen}></Stack.Screen>
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ gestureEnabled: true, headerShown: false }} //Android: by enabling gesture users can swipe down from the top of the screen instead of tapping somewhere to go back (on iOS, mode="modal" do the trick by itself)
    ></Stack.Screen>
  </Stack.Navigator>
);
