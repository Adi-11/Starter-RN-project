import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { useEffect } from "react";
import PushNotification from "react-native-push-notification";

export const RemoteNotification: React.FC<any> = () => {
  useEffect(() => {
    PushNotification.configure({
      onRegister: (token) => {
        console.log("TOKEN:", token);
      },

      onNotification: (notification) => {
        console.log("NOTIFICATION:", notification);

        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      onAction: (notification) => {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
        // process the action
      },

      onRegistrationError: (err) => {
        console.error(err.message, err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,

      requestPermissions: true,
    });
  }, []);

  return null;
};
