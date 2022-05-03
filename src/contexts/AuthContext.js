import React, {useState, useEffect, useContext} from 'react'
import { auth } from '../firebase/firebase'
import { useHistory } from 'react-router-dom'

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const history = useHistory();

    function signUp(email, password, name) {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
      history.push("/");
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

      const val = {
        currentUser,
        signUp,
        signIn,
        logOut,
        history,
      }

      return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={val}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
