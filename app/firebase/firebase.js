// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGYVppQjCNzCrkp74WBVxDanQ7baJF8iA",
    authDomain: "fir-simpleapp-894a6.firebaseapp.com",
    projectId: "fir-simpleapp-894a6",
    storageBucket: "fir-simpleapp-894a6.appspot.com",
    messagingSenderId: "412240323988",
    appId: "1:412240323988:web:c348c75a128625562adb81"
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig)
// } else {
//     app = firebase.app();
// }
const app = initializeApp(firebaseConfig);
// const db = app.firestore();
// const auth = firebase.auth();

// export { auth };

export const authentication = getAuth(app);
export const db = getFirestore(app);
