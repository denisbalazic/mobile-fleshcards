import AsyncStorage from "@react-native-community/async-storage";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

const NOTIFICATION_KEY = "Mobileflashcards:notifications";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "Quiz reminder",
    body: "Answer your daily quiz!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      console.log(data);
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          console.log(status);
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let notificationTime = new Date(Date.now());
            notificationTime.setHours(20);
            notificationTime.setMinutes(0);
            notificationTime.setSeconds(0);
            console.log(notificationTime);

            Notifications.setNotificationHandler({
              handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: false,
              }),
            });
            Notifications.scheduleNotificationAsync({
              content: createNotification(),
              trigger: notificationTime,
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
