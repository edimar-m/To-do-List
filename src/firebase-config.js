import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDWoNPrklSzRK1icmct4AMvZY07zrSBagk",
    authDomain: "to-do-list-b784c.firebaseapp.com",
    projectId: "to-do-list-b784c",
    storageBucket: "to-do-list-b784c.appspot.com",
    messagingSenderId: "441713649686",
    appId: "1:441713649686:web:ff96b7aafa3934b271ad37",
    measurementId: "G-4VF03SL9XF"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();