// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB66OGU7gxmAoB-8Pm3UAvIdju4Pjj_BL4",
    authDomain: "luxovia-tours-ca4ea.firebaseapp.com",
    projectId: "luxovia-tours-ca4ea",
    storageBucket: "luxovia-tours-ca4ea.firebasestorage.app",
    messagingSenderId: "661267478957",
    appId: "1:661267478957:web:486b5a9aa9a0fa6cbd8924",
    measurementId: "G-SSP15VKT9H"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);