import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator}></Tab.Screen>
    <Tab.Screen name="ListingEdit" component={ListingEditScreen}></Tab.Screen>
    <Tab.Screen name="Account" component={AccountScreen}></Tab.Screen>
  </Tab.Navigator>
);
