import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCo78dJgIBlqjAVAma_K8PZwgLINgg2gCs",
    authDomain: "authentication-sandbox-46462.firebaseapp.com",
    databaseURL: "https://authentication-sandbox-46462.firebaseio.com",
    projectId: "authentication-sandbox-46462",
    storageBucket: "authentication-sandbox-46462.appspot.com",
    messagingSenderId: "662091648819",
    appId: "1:662091648819:web:cdfbd628dc2969318b7846",
    measurementId: "G-Y15XGK9RP2"
});

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const emailProvider = new firebase.auth.EmailAuthProvider.credential(
//     email,
//     password
// );

export default firebase;