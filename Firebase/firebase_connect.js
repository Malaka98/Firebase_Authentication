const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyDIUms7E_65faTiz1z6jdFM-w3uJ7Oe0ZM",
  authDomain: "auth-guard-1cfab.firebaseapp.com",
  projectId: "auth-guard-1cfab",
  storageBucket: "auth-guard-1cfab.appspot.com",
  messagingSenderId: "302690070240",
  appId: "1:302690070240:web:a793f4fda9c1ecdc49aa85",
};
// Initialize Firebase

// const firestore = firebase.firestore();
const app = firebase.initializeApp(firebaseConfig);
module.exports = app;
