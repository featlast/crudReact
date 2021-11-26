//import { initializeApp } from "firebase/app";
//import {getAuth} from 'firebase/auth';
//import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAuuQ8Dn6beZZQ6e6vxmLeVyPa83xuidFg",
    authDomain: "crud-2fa49.firebaseapp.com",
    projectId: "crud-2fa49",
    storageBucket: "crud-2fa49.appspot.com",
    messagingSenderId: "954897910850",
    appId: "1:954897910850:web:313aecdfe23c73d212f1db"
  }

  
  //const app= initializeApp(firebaseConfig);
  //const auth= getAuth(firebaseApp);
  //const firebaseApp= getFirestore(app);


  //export default firebaseApp;


  export const firebaseApp= firebase.initializeApp(firebaseConfig);

  