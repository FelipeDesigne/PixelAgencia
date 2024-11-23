import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_cQM_IT673H53Qw164DP29_gOI8TAGdg",
  authDomain: "pixelagencia-663a1.firebaseapp.com",
  projectId: "pixelagencia-663a1",
  storageBucket: "pixelagencia-663a1.firebasestorage.app",
  messagingSenderId: "942976055229",
  appId: "1:942976055229:web:e4673039b1733fa43f04d4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);