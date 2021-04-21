import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiR3UU6y7MaFj_NtzKFhJZ2MCtl0sP1yM",
  authDomain: "jobsheet-11---firebase-login.firebaseapp.com",
  databaseURL:
    "https://jobsheet-11---firebase-login-default-rtdb.firebaseio.com",
  projectId: "jobsheet-11---firebase-login",
  storageBucket: "jobsheet-11---firebase-login.appspot.com",
  messagingSenderId: "329291912349",
  appId: "1:329291912349:web:e98d655cfcf74276993074",
  measurementId: "G-JCLLF3EDZ6",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
