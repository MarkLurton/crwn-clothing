import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD55OetYUS3tPl-IxsFlHKdilCH5EMYueQ",
    authDomain: "crwn-db-6ba30.firebaseapp.com",
    projectId: "crwn-db-6ba30",
    storageBucket: "crwn-db-6ba30.appspot.com",
    messagingSenderId: "597060544108",
    appId: "1:597060544108:web:0981ead985717870f81a49",
    measurementId: "G-YEHEDTDFG7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;