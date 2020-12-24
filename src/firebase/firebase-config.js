import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCDxFKlq6LHqL0OtxYXmYlbtXEDPQbmmYI",
    authDomain: "react-app-curso-70fee.firebaseapp.com",
    projectId: "react-app-curso-70fee",
    storageBucket: "react-app-curso-70fee.appspot.com",
    messagingSenderId: "567086459647",
    appId: "1:567086459647:web:486867962810f1b6f9baca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(); // esta es la base de datos
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); //es para que yo pueda hacer autenticacion con google

  export {
    db,
    googleAuthProvider,
    firebase
  }