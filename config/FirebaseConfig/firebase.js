import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { initializeFirestore, getFirestore } from "firebase/firestore";
''
const firebaseConfig = {
  apiKey: "AIzaSyB32kFHA-wkZ_41F9C8qAxvGTWn0Wc45Tk",
  authDomain: "movel-e8b0c.firebaseapp.com",
  projectId: "movel-e8b0c",
  storageBucket: "movel-e8b0c.appspot.com",
  messagingSenderId: "793910504736",
  appId: "1:793910504736:web:22cbbe5572d6b397ac3b45"
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const firestore = initializeFirestore(firebase, {experimentalForceLongPolling: true});
