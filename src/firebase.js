//import { initializeApp } from "firebase/app";
//import {getAuth} from 'firebase/auth';
//import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    
  }

  
  //const app= initializeApp(firebaseConfig);
  //const auth= getAuth(firebaseApp);
  //const firebaseApp= getFirestore(app);


  //export default firebaseApp;


  export const firebaseApp= firebase.initializeApp(firebaseConfig);

  
