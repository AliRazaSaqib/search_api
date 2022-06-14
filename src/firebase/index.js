/** @format */

import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxfcM6PRZq6gvZ4Rjwjebfk0LswTS0CKA",
  authDomain: "protected-routes-ec02d.firebaseapp.com",
  projectId: "protected-routes-ec02d",
  storageBucket: "protected-routes-ec02d.appspot.com",
  messagingSenderId: "976661548533",
  appId: "1:976661548533:web:17b6ca7991bd29640924bc",
  measurementId: "G-Z6GT3QT84B",
};

if (firebase.getApps().length < 1) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
