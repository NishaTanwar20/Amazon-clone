import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7n2j8l736YpnR9O-ZqlZ5UiPjNcsSu8E",
  authDomain: "clone-c0ffb.firebaseapp.com",
  projectId: "clone-c0ffb",
  storageBucket: "clone-c0ffb.appspot.com",
  messagingSenderId: "863415386553",
  appId: "1:863415386553:web:fdc38d3f57c71ad8d0f668"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
