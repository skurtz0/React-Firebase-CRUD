import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFqhygCzU31LmFJh_3CVjZTJOV9SCd_2c",
    authDomain: "crud-20883.firebaseapp.com",
    projectId: "crud-20883",
    storageBucket: "crud-20883.appspot.com",
    messagingSenderId: "329443256262",
    appId: "1:329443256262:web:35b7349d19d22e1f24b4c7"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);