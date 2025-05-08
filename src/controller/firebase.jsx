// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxmfwBFAvn_ejsvl_ct7wx0A2bHGXisgM",
  authDomain: "ccassignment8-45920.firebaseapp.com",
  databaseURL: "https://ccassignment8-45920-default-rtdb.firebaseio.com",
  projectId: "ccassignment8-45920",
  storageBucket: "ccassignment8-45920.firebasestorage.app",
  messagingSenderId: "942716101036",
  appId: "1:942716101036:web:f95751c2ef84ba83641a09",
  measurementId: "G-37GXLFZCDZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)