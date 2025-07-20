// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWTZKrWGdJyRuVR7sEzm4rPqbT1zSlAR0",
  authDomain: "wiseprep-ecb8f.firebaseapp.com",
  projectId: "wiseprep-ecb8f",
  storageBucket: "wiseprep-ecb8f.firebasestorage.app",
  messagingSenderId: "55626230538",
  appId: "1:55626230538:web:2360f19cac47a8c5c3a8f3",
  measurementId: "G-MBNNCWRJ6H",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
