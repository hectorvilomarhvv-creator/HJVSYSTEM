import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "hjvsystem-b9b5c.firebaseapp.com",
  projectId: "hjvsystem-b9b5c",
  storageBucket: "hjvsystem-b9b5c.firebasestorage.app",
  messagingSenderId: "667606918959",
  appId: "1:667606918959:web:b24e777b4979d5bfde23da"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);