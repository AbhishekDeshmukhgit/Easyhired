import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyB86c4kshJCkdoExXls6qGY-HqhaTdSnto",
    authDomain: "easyhired-35b63.firebaseapp.com",
    projectId: "easyhired-35b63",
    storageBucket: "easyhired-35b63.appspot.com",
    messagingSenderId: "664842632078",
    appId: "1:664842632078:web:2a033f70112d3acae902df",
    measurementId: "G-FKPYLC5D8S"
  };

  //init firebase
  const app = initializeApp(firebaseConfig);

  //init services
  const auth = getAuth();
  const projectFirestore= getFirestore(app)

  export {auth,projectFirestore}