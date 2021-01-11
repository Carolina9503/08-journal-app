import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // console.log(process.env )
  

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey:process.env.REACT_APP_APIKEY ,
    authDomain:process.env.REACT_APP_AUTHDOMAIN,
    projectId:process.env.REACT_APP_PROJECTID,
    storageBucket:process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
    appId:process.env.REACT_APP_APPID 
  };

   // Your web app's Firebase configuration testing
  //  const firebaseConfigTesting = {
  //   apiKey:process.env.REACT_APP_APIKEY ,
  //   authDomain:process.env.REACT_APP_AUTHDOMAIN,
  //   projectId:process.env.REACT_APP_PROJECTID ,
  //   storageBucket:process.env.REACT_APP_STORAGEBUCKET ,
  //   messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID ,
  //   appId:process.env.REACT_APP_APPID 
  // };

  // console.log( process.env); me deja ver el estado de configuracion NODE_ENV: "development"
  // if (process.env.NODE_ENV === 'test') {
    //testing
    // firebase.initializeApp(firebaseConfigTesting);
  // }else{
    // dev/prod
    // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);

  // }

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(); // esta es la base de datos
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); //es para que yo pueda hacer autenticacion con google

  export {
    db,
    googleAuthProvider,
    firebase
  }