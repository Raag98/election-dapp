import React, {useState, useEffect, useContext} from 'react'
import { auth } from '../firebase/firebase'
import { Navigate, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const history = useNavigate();

    function signUp(email, password, name) {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
      Navigate("/");
      return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('User logged in! - ', user);
          setCurrentUser(user);
        } else {
          console.log("User not logged in!");
          setCurrentUser(null);
        }

        setLoading(false);
      });

      return unsubscribe;
    }, []);

    const value = {
      currentUser,
      signUp,
      signIn,
      logOut,
      history,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
