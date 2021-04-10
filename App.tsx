import React, { useEffect } from "react";
import AppTabs from "./app/screeens/AppTabs";
import messaging from "@react-native-firebase/messaging";
import firebase from "@react-native-firebase/app";
import { RemoteNotification } from "./app/helpers/RemotePushNotification";
import {
  FIREBASE_CLIENT_ID,
  FIREBASE_APP_ID,
  FIREBASE_API_KEY,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_PROJECT_ID,
} from "@env";
import PushNotification from "react-native-push-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";
const androidConfig = {
  clientId: FIREBASE_CLIENT_ID,
  appId: FIREBASE_APP_ID,
  apiKey: FIREBASE_API_KEY,
  databaseURL: "x",
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "x",
  projectId: FIREBASE_PROJECT_ID,
  persistence: true,
};

export default function App() {
  useEffect(() => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(androidConfig);
    }
    PushNotification.createChannel(
      {
        channelId: "tester1234", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications",
        playSound: true,
        soundName: "default",
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`createChannel returned '${created}'`)
    );
    checkPermission();
  }, []);
  const checkPermission = async () => {
    const enabled = await messaging().hasPermission();
    console.log({ enabled });
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  };

  const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    if (!fcmToken) {
      fcmToken = await messaging().getToken();

      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem("fcmToken", fcmToken);
      }
    }
  };

  const requestPermission = async () => {
    try {
      await messaging().requestPermission();
      // User has authorised
      getToken();
    } catch (error) {
      // User has rejected permissions
      console.log("permission rejected");
    }
  };
  return (
    <>
      <AppTabs />
      <RemoteNotification />
    </>
  );
}
