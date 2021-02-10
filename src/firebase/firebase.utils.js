import firebase from "firebase/app";
import "firebase/firestore";
// Gives us access to the firestore db utilities
import "firebase/auth";
// Gives us access to the firebase auth utilities
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
// contains all of the config for conection to our firebase
firebase.initializeApp(config);
// Connects to firebase
export const auth = firebase.auth();
// Gives us accesss to firebase auth utilities
// This enables us to sign people in/out
// + Listen for auth change etc
export const createUserDocument = async (userAuth, additionalData) => {
    //receives user auth data from app.js
    if (!userAuth) return;
    //Checks whether user is signed in
    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    // Creates search for user using ID
    // Returns a search not the actual user data
    const userSnapShot = await userRef.get();
    //Uses the userRef to get the user data
    if (!userSnapShot.exists) {
        //Checks whether the user exists, if not:
        const { displayName, email } = userAuth;
        // Destructure displayName and email from user auth object
        const createdAt = new Date();
        // Record the date / time the record was made.
        try {
            userRef.set(
                //saves the following data to the db
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            );
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
    //return userRef so that the information can be used for other stuff.
};

export const addCollectionsAndDocuments = async (key, dataToAdd) => {

    const collectionRef = firestore.collection(key)
    
    const batch = firestore.batch()

    dataToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data()
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection
        return acc
    }, {})
}

export const firestore = firebase.firestore();
//Gives us access to the firestore utilites in other modules

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
// Sign in with google set up

export default firebase;
