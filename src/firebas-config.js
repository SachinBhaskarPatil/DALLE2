// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_H5FOmoI6fnT1qAmNdtf9qLcP15vki68",
  authDomain: "imagegen-eb163.firebaseapp.com",
  projectId: "imagegen-eb163",
  storageBucket: "imagegen-eb163.appspot.com",
  messagingSenderId: "991595027724",
  appId: "1:991595027724:web:1fbb5c03a1be006e38fd29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth=getAuth(app);

const Provider=new GoogleAuthProvider();
const db=getFirestore(app);
const storage=getStorage(app);
const API_TOKEN="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";
export {Auth,Provider,db,storage,API_TOKEN};