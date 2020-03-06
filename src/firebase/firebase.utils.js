import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC11v8fJD9PbMsiq0mPhKzGN-RBE3CnnFQ",
    authDomain: "crown-db-5d7ae.firebaseapp.com",
    databaseURL: "https://crown-db-5d7ae.firebaseio.com",
    projectId: "crown-db-5d7ae",
    storageBucket: "crown-db-5d7ae.appspot.com",
    messagingSenderId: "948280587374",
    appId: "1:948280587374:web:8c2a69e438475c7daa627f",
    measurementId: "G-904BSCSPVJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const createUserDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; 

    const userRef = await firestore.doc(`users/${userAuth.uid}`)

    const userSnapShot = await userRef.get()

    if (!userSnapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try {
        userRef.set(
            {
                displayName,
                email,
                createdAt,
                ...additionalData
            }
        )
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


