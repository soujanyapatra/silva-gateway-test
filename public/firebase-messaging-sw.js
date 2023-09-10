// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCDrJ1xYPnyz7ue3oxOB9ZNKsocZnUz5Q8",
  authDomain: "silvatree-test.firebaseapp.com",
  projectId: "silvatree-test",
  storageBucket: "silvatree-test.appspot.com",
  messagingSenderId: "152911143523",
  appId: "1:152911143523:web:b418e42560cfcc54afce56"
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/silvalogo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/account/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service worker registered:", registration);
    })
    .catch((error) => {
      console.error("Service worker registration failed:", error);
    });
}

// import { getMessaging } from "firebase/messaging/sw";
// import { onBackgroundMessage } from "firebase/messaging/sw";

// const messaging = getMessaging();
// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
