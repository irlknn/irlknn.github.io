import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_TofbbFJrjT2m86sKxzjmzQegApNBHkM",
  authDomain: "hackathons-11ff.firebaseapp.com",
  projectId: "hackathons-11ff",
  storageBucket: "hackathons-11ff.firebasestorage.app",
  messagingSenderId: "821907787938",
  appId: "1:821907787938:web:a6534184f5daf41ccb47fb",
  measurementId: "G-J1DQWZBR6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);