// https://firebase.google.com/docs/firestore/quickstart

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// https://console.firebase.google.com/project/meldong/settings/general
const firebaseConfig = {
  apiKey: "AIzaSyACh_AXa4asc1VPD632sLNiWTWIbmkxq4w",
  authDomain: "meldong.firebaseapp.com",
  projectId: "meldong",
  storageBucket: "meldong.appspot.com",
  messagingSenderId: "1027732325030",
  appId: "1:1027732325030:web:e9eef42fd107693c842a67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// db.settings({ timestampsInSnapshots: true });

export default db;
