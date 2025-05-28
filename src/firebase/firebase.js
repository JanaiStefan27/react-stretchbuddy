// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY9eQj6ydC1aMXm8RGlHDuzfInjI1mHOo",
  authDomain: "sport-warm-up-app.firebaseapp.com",
  projectId: "sport-warm-up-app",
  storageBucket: "sport-warm-up-app.firebasestorage.app",
  messagingSenderId: "504364989249",
  appId: "1:504364989249:web:233155f0436bcbd34b3fc0",
  measurementId: "G-TJBLEXXBTM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { firestore, storage, auth };
