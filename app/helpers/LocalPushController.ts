import PushNotification from "react-native-push-notification";

PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log("LOCAL NOTIFICATION ==>", notification);
  },

  popInitialNotification: true,
  requestPermissions: true,
});

export const LocalNotification = (): void => {
  PushNotification.localNotification({
    autoCancel: true,
    bigText:
      "This is local notification demo in React Native app. Only shown, when expanded.",
    subText: "Local Notification Demo",
    title: "Local Notification Title",
    message: "Expand me to see more",
    bigPictureUrl:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: "default",
    actions: ["YEs", "No"],
  });
};

export const ScheduledLocalNotification = (): void => {
  PushNotification.localNotificationSchedule({
    autoCancel: true,
    bigText:
      "This is local notification demo in React Native app. Only shown, when expanded.",
    subText: "Local Notification Demo",
    title: "Scheduled Notification Title",
    message: "Scheduled Notification Message",
    vibrate: true,
    vibration: 500,
    playSound: true,
    soundName: "default",
    actions: ["Yes", "No"],
    date: new Date(Date.now() + 3 * 1000), // in 3 secs
  });
};
