import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator}></Tab.Screen>
    <Tab.Screen name="ListingEdit" component={ListingEditScreen}></Tab.Screen>
    <Tab.Screen name="Account" component={AccountNavigator}></Tab.Screen>
  </Tab.Navigator>
);
