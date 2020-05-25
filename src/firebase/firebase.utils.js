import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCyhLpnqdLVYPs-dBvEddbJfkybnxZvv90",
    authDomain: "eshop-db-36077.firebaseapp.com",
    databaseURL: "https://eshop-db-36077.firebaseio.com",
    projectId: "eshop-db-36077",
    storageBucket: "eshop-db-36077.appspot.com",
    messagingSenderId: "570541718837",
    appId: "1:570541718837:web:a802be805643d80de5e07c",
    measurementId: "G-KKGMFB5899"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase