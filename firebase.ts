import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnTvnu9kEZH2xGwxbp7YzQTJuGf4mtKcU",
  authDomain: "sunil-fabrications.firebaseapp.com",
  projectId: "sunil-fabrications",
  storageBucket: "sunil-fabrications.firebasestorage.app",
  messagingSenderId: "77295608272",
  appId: "1:77295608272:web:a75ab5faa48353b7fb59d5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
