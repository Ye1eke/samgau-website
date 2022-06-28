// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCSHVb91NdBaqPQs40tv9WmnGbjzLUxAUo",
    authDomain: "samgau-clone.firebaseapp.com",
    projectId: "samgau-clone",
    storageBucket: "samgau-clone.appspot.com",
    messagingSenderId: "533018424851",
    appId: "1:533018424851:web:6c3a4b78f99a52b255f1e6",
    measurementId: "G-Q76Y8ZJKW1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };