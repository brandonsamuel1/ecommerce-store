import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "crwn-clothing-db-39884.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-39884.firebaseio.com",
    projectId: "crwn-clothing-db-39884",
    storageBucket: "crwn-clothing-db-39884.appspot.com",
    messagingSenderId: "167869906070",
    appId: "1:167869906070:web:1e20c1c8fd2ad5379f56b7",
    measurementId: "G-L4J127BFJR"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase