import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA13FeQs2bz4FpRIbFQc8ynlSi5p6j1ooM",
    authDomain: "eccom-nozomi.firebaseapp.com",
    projectId: "eccom-nozomi",
    storageBucket: "eccom-nozomi.appspot.com",
    messagingSenderId: "7444408318",
    appId: "1:7444408318:web:f02c7da20cd059137bc2af",
    measurementId: "G-K1GLGQZ3JQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;