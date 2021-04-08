import React, { useEffect } from "react";
import AppTabs from "./app/screeens/AppTabs";

import firebase from "@react-native-firebase/app";
import { RemoteNotification } from "./app/helpers/RemotePushNotification";
const androidConfig = {
  clientId:
    "671737558679-p4uensui7rgjvhl5l3e8k4jtoo1jcoue.apps.googleusercontent.com",
  appId: "1:671737558679:android:796a1bce91870522d61bd2",
  apiKey: "AIzaSyCgMSSdHkRG2pQT8IucElZZ_bicxzR-nas",
  databaseURL: "x",
  storageBucket: "trainning-27840.appspot.com",
  messagingSenderId: "x",
  projectId: "trainning-27840",
  persistence: true,
};

export default function App() {
  useEffect(() => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(androidConfig);
    }
  }, []);
  return (
    <>
      <AppTabs />
      <RemoteNotification />
    </>
  );
}
