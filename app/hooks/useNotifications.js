import { useEffect, useState, useRef } from "react";
import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default useNotifications = (responseListener) => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListenerRef = useRef();
  const responseListenerRef = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
      expoPushTokensApi.register(token);

      /* notificationListenerRef.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });

      responseListenerRef.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log(response);
        }); */

      //Listeners registered by this method will be called whenever a notification
      //is received while the app is running.
      notificationListenerRef.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });

      //Listeners registered by this method will be called whenever a user interacts
      //with a notification (eg. taps on it).
      if (responseListener)
        responseListenerRef.current =
          Notifications.addNotificationResponseReceivedListener(
            responseListener
          );

      return () => {
        Notifications.removeNotificationSubscription(
          notificationListenerRef.current
        );
        Notifications.removeNotificationSubscription(
          responseListenerRef.current
        );
      };
    });
  }, []);

  return {
    expoPushToken,
    notification,
  };
};

async function registerForPushNotificationsAsync() {
  try {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  } catch (error) {
    console.log("Error getting a push token", error);
  }
}
