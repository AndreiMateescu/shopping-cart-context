import firebase from "firebase/compat/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAj5xPPIesj-MnDxA2RCKYc-BhI1OLK23I",
    authDomain: "shopping-cart-395d5.firebaseapp.com",
    projectId: "shopping-cart-395d5",
    storageBucket: "shopping-cart-395d5.appspot.com",
    messagingSenderId: "967517979249",
    appId: "1:967517979249:web:25f696d221feb11edb91d0",
    measurementId: "G-QR01MN11HV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;