import messaging from "@react-native-firebase/messaging";
import { Platform } from "react-native";

class FMCServices {
  messageListener: any;

  getToken = (onRegister: any) => {
    messaging()
      .getToken()
      .then((fmcToken) => {
        if (fmcToken) {
          onRegister(fmcToken);
        } else {
          console.log("[FCMService] User does not have a devices token");
        }
      })
      .catch((e) => console.log({ getTokenERROR: e }));
  };
  requestPermission = (onRegister: any) => {
    messaging()
      .requestPermission()
      .then(() => {
        this.getToken(onRegister);
      })
      .catch((err) => console.log({ requestPermissionERROR: err }));
  };
  checkPermissions = (onRegister: any) => {
    messaging()
      .hasPermission()
      .then((enabled) => {
        if (enabled) {
          this.getToken(onRegister);
        } else {
          this.requestPermission(onRegister);
        }
      });
  };

  register = (
    onRegister: any,
    onNotification: any,
    onOpenNotification: any
  ) => {
    this.checkPermissions(onRegister);
    this.createNotificationListeners(
      onRegister,
      onNotification,
      onOpenNotification
    );
  };
  deleteToken = () => {
    console.log("[FCMService] Delete Token");
    messaging()
      .deleteToken()
      .catch((error) => {
        console.log({ "[FCMService] Delete Token Error": error });
      });
  };

  createNotificationListeners(
    onRegister: any,
    onNotification: any,
    onOpenNotification: any
  ) {
    //   BACKGROUND
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log({
        "[FCMService] OnNotificationOpenedApp getInitialNotification": remoteMessage,
      });
      if (remoteMessage) {
        const notification = remoteMessage;
        onOpenNotification(notification);
      }
    });

    // CLOSE
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        console.log({
          "[FCMService] getInitialNotification getInitialNotification": remoteMessage,
        });
        if (remoteMessage) {
          const notification = remoteMessage;
          //  TODO
          //  localNotificationService.cancelAllLocalNotifications();
          onOpenNotification(notification);
        }
      });

    // ACTIVE
    this.messageListener = messaging().onMessage(async (remoteMessage) => {
      console.log({ "[FCMService] A new FCm message arrived": remoteMessage });
      if (remoteMessage) {
        let notification = null;
        if (Platform.OS === "ios") {
          notification = remoteMessage.data;
        } else {
          notification = remoteMessage;
        }

        onNotification(notification);
      }
    });

    // Triggered when have new Token
    messaging().onTokenRefresh((fcmToken) => {
      console.log("[FCMService] New token refresh", fcmToken);
      onRegister(fcmToken);
    });
  }

  unRegister = () => {
    this.messageListener();
  };
}

export const fcmService = new FMCServices();
