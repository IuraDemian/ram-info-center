import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = 
{
  apiKey: "AIzaSyDrKbFuGZD4VwujeRmmzP0dbrKxKj54pNU",
  authDomain: "ram-info-center-a8837.firebaseapp.com",
  projectId: "ram-info-center-a8837",
  storageBucket: "ram-info-center-a8837.firebasestorage.app",
  messagingSenderId: "80153878675",
  appId: "1:80153878675:web:41bc9bcad3044a77e3ad66",
  measurementId: "G-N7ST7P2J1M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };