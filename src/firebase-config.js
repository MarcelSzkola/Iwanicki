import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";

// Konfiguracja Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBA0yLdF3CnrXwTYT_iukfP7N4tW2SF1rg",
    authDomain: "projektnoga-a6b2e.firebaseapp.com",
    databaseURL: "https://projektnoga-a6b2e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projektnoga-a6b2e",
    storageBucket: "projektnoga-a6b2e.firebasestorage.app",
    messagingSenderId: "730595797860",
    appId: "1:730595797860:web:c5a380e9b11e1776c32871",
    measurementId: "G-0E7YH4PY0Q"
  };

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database,auth, ref, set, get, child };
