import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDer8Ag5FGBq7zjZ3j-tp7YyaXKKWhueps",
  authDomain: "database-supplier-hi-technics.firebaseapp.com",
  databaseURL:
    "https://database-supplier-hi-technics-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "database-supplier-hi-technics",
  storageBucket: "database-supplier-hi-technics.firebasestorage.app",
  messagingSenderId: "934530752707",
  appId: "1:934530752707:web:1ef00dd9d3995cabac8276",
  measurementId: "G-P0C4CNLYW3",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
