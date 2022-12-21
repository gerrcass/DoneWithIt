import React, { useEffect } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import useNotifications from "../hooks/useNotifications";
import navigation from "./rootNavigation";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
  const { notification, expoPushToken } = useNotifications((response) => {
    navigation.navigate("AccountTab", { screen: "Account" });
    console.log(response);
  });

  useEffect(() => {
    //Do Something when user get a notification o tap on it
    /* console.log("notification>> ", notification);
    console.log("expoPushToken>> ", expoPushToken); */
  }, [notification, expoPushToken]);

  return (
    <Tab.Navigator /* screenOptions={{ headerShown: false }} */>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingEdit")}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
