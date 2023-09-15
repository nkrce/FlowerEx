import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBkG4o0NMAWMUtyGwO6fesXI_m3-SlXFK8",
    authDomain: "flowerex-2023.firebaseapp.com",
    projectId: "flowerex-2023",
    storageBucket: "flowerex-2023.appspot.com",
    messagingSenderId: "1061361529419",
    appId: "1:1061361529419:web:caccd24844c2de0cfa13ce"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };