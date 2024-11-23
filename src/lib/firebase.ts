import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAm-WBZmBbWxhhrUGEoQquzOu9GhrDoAEM",
  authDomain: "programa-cliente.firebaseapp.com",
  projectId: "programa-cliente",
  storageBucket: "programa-cliente.firebasestorage.app",
  messagingSenderId: "414594954917",
  appId: "1:414594954917:web:63b96922ab1346e686ff4c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);