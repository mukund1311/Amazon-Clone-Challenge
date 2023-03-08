import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOG1SE92jrc14eDMwwi20GSAJQDMlw2M4",
  authDomain: "firebas-bf5b3.firebaseapp.com",
  databaseURL: "https://firebas-bf5b3-default-rtdb.firebaseio.com",
  projectId: "firebas-bf5b3",
  storageBucket: "firebas-bf5b3.appspot.com",
  messagingSenderId: "516548676376",
  appId: "1:516548676376:web:f83ff886a68780faa8ec6d",
  measurementId: "G-93SY27X6SK"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


export { db , auth};