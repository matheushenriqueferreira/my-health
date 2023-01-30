import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { initializeFirestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Insira aqui a configuração do projeto do Firebase
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const firestore = initializeFirestore(firebase, {experimentalForceLongPolling: true});
