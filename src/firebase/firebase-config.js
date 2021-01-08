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

   // Your web app's Firebase configuration testing
   const firebaseConfigTesting = {
    apiKey: "AIzaSyBlrFcS-odEEspRalPvIfbBc0QN429z0Hc",
    authDomain: "react-app-curso-testing.firebaseapp.com",
    projectId: "react-app-curso-testing",
    storageBucket: "react-app-curso-testing.appspot.com",
    messagingSenderId: "977409016266",
    appId: "1:977409016266:web:3c1c9b7cc715b378904f33"
  };

  // console.log( process.env); me deja ver el estado de configuracion NODE_ENV: "development"
  if (process.env.NODE_ENV === 'test') {
    //testing
    firebase.initializeApp(firebaseConfigTesting);
  }else{
    // dev/prod
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }

  const db = firebase.firestore(); // esta es la base de datos
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); //es para que yo pueda hacer autenticacion con google

  export {
    db,
    googleAuthProvider,
    firebase
  }