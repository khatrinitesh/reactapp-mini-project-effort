import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBBa_DGD83w7jrASv3BX1YI5E2v5MyMaEM",
  authDomain: "todoreactapp-5c40b.firebaseapp.com",
  projectId: "todoreactapp-5c40b",
  storageBucket: "todoreactapp-5c40b.appspot.com",
  messagingSenderId: "197283801172",
  appId: "1:197283801172:web:b74f015178eca31f37a5c1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };