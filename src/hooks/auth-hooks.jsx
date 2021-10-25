import {useEffect} from 'react'
import { auth, createUserDocument } from "../firebase/firebase.utils";
import {useDispatch} from 'react-redux';
import {setCurrentUser} from '../redux/user/user.actions'
export const useAuthListener = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsub = auth.onAuthStateChanged(async userAuth => {
            // Listens for change in auth state
        if (userAuth) {
            const userRef = await createUserDocument(userAuth);
            // If a new user has been created adds it to database
            // Once complete or if user exists, returns userRef
            userRef.onSnapshot(snapShot => {
                // Listens for change in user data
                dispatch(setCurrentUser(
                    {
                        id: snapShot.id,
                        ...snapShot.data()
                    },
                    // Sets current user information
                    // Using data from firestore
                ));
            });
        } else {
            dispatch(setCurrentUser(userAuth));
            // If no user then sets user to null
        }
    	});
		return () => {
			unsub()
		}
	}, [dispatch])
	
};
