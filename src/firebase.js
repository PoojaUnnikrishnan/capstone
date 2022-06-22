import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDd_rZqWoRGM9eqj6g3IUNtRD3ilD_cLcE",
  authDomain: "pompom-ccef6.firebaseapp.com",
  projectId: "pompom-ccef6",
  storageBucket: "pompom-ccef6.appspot.com",
  messagingSenderId: "328617153311",
  appId: "1:328617153311:web:cd2d3670f3a419f56fd62a",
  measurementId: "G-7HC0LF7103",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
