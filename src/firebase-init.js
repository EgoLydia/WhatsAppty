import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBvCG6umx4Y_Lr5lBPBSjAVBdaYtDXyNoQ",
    authDomain: "whatsappty-54ac1.firebaseapp.com",
    projectId: "whatsappty-54ac1",
    storageBucket: "whatsappty-54ac1.appspot.com",
    messagingSenderId: "5755978349",
    appId: "1:5755978349:web:bd21f49087c0c649627564"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }