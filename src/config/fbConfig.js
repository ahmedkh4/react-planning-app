// firebase config 


import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



var firebaseConfig ={
    // Your web app's Firebase configuration  // script from firebase

    apiKey: "AIzaSyC0_iOKtcPmNgbdIZlueIfCptz4lzwpJFU",
    authDomain: "react-planning-app-fd9c1.firebaseapp.com",
    databaseURL: "https://react-planning-app-fd9c1.firebaseio.com",
    projectId: "react-planning-app-fd9c1",
    storageBucket: "react-planning-app-fd9c1.appspot.com",
    messagingSenderId: "293785062135",
    appId: "1:293785062135:web:043815165143b3c19261f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;
