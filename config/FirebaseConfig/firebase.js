import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { initializeFirestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const firestore = initializeFirestore(firebase, {experimentalForceLongPolling: true});
