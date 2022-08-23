importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
// const firebaseConfig = {
//     apiKey: "AIzaSyCb4h7rXaWDmb3jJ1dc2mAXzzT18lmYPaM",
//     authDomain: "notificationdemo-89ab4.firebaseapp.com",
//     projectId: "notificationdemo-89ab4",
//     storageBucket: "notificationdemo-89ab4.appspot.com",
//     messagingSenderId: "688240627339",
//     appId: "1:688240627339:web:72299e2b583e5f1ab50e8e",
//     measurementId: "G-B9339TYQY6"
//   };
firebase.initializeApp({
    apiKey: "AIzaSyCb4h7rXaWDmb3jJ1dc2mAXzzT18lmYPaM",
    authDomain: "notificationdemo-89ab4.firebaseapp.com",
    projectId: "notificationdemo-89ab4",
    storageBucket: "notificationdemo-89ab4.appspot.com",
    messagingSenderId: "688240627339",
    appId: "1:688240627339:web:72299e2b583e5f1ab50e8e",
    measurementId: "G-B9339TYQY6"
});
const messaging = firebase.messaging();