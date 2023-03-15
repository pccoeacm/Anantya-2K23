import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4qQTGQFwJgdpdeV4EWy48O8ayEeAY48w",
  authDomain: "anantya-2k23.firebaseapp.com",
  projectId: "anantya-2k23",
  storageBucket: "anantya-2k23.appspot.com",
  messagingSenderId: "884093645322",
  appId: "1:884093645322:web:dc3b2322226cf7bbfde5f3",
  databaseURL: "https://anantya-2k23-default-rtdb.firebaseio.com/",
};

export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider();
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const signupWithGoogle = () => {
        return signInWithPopup(firebaseAuth, googleProvider);
    };

    const LoggedInUser = onAuthStateChanged(firebaseAuth, user => {
        if(user) {
            //user is logged in 
            console.log('Hello', user);
        } 
        else{
            console.log("You are logged out");
        }

    })

    return (
        <FirebaseContext.Provider value={{
            signupWithGoogle,
            LoggedInUser
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}