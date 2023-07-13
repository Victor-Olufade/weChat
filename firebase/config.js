import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {collection, initializeFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuCLINGY9xlb5v3bc-f8oP2QDhGBv8NoI",
  authDomain: "wechat-1ed78.firebaseapp.com",
  projectId: "wechat-1ed78",
  storageBucket: "wechat-1ed78.appspot.com",
  messagingSenderId: "562490075610",
  appId: "1:562490075610:web:d770463265340d699ab8e3",
  measurementId: "G-B852PFPXBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const dBase = initializeFirestore(app, {
    experimentalForceLongPolling: true
});