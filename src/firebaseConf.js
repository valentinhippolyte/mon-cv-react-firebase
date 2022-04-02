import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/firestore"
import { auth } from "firebaseui";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyAZaLGIxiIQOSI7oMnYFHSZDG1h03U9Vxo",
    authDomain: "moncv-4ea33.firebaseapp.com",
    databaseURL: "https://moncv-4ea33-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "moncv-4ea33",
    storageBucket: "moncv-4ea33.appspot.com",
    messagingSenderId: "652590634556",
    appId: "1:652590634556:web:35b60fe695346e09a51539",
    measurementId: "G-EJNQXK3FHK"
  });

  export const configUi = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: function() {
            window.history.back();  
        }
    }
  }
  
  export const db = firebase.firestore();

  export var storage = firebase.storage();