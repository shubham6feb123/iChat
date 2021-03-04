import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFMpvcFmGDMbTb5nD6NlW0KncvZ-M6JIY",
  authDomain: "ichat-2f838.firebaseapp.com",
  projectId: "ichat-2f838",
  storageBucket: "ichat-2f838.appspot.com",
  messagingSenderId: "1031683433369",
  appId: "1:1031683433369:web:d06aa36340fd6631752908",
  measurementId: "G-RKJ4P3X1EP",
});
const db = firebaseApp.firestore(); //database  db hai
export default db;
