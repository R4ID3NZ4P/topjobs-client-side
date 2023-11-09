import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from "../firebase/firebase.config"
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const update = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
          });
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            const name = currentUser?.displayName;
            const data = {name};
            setLoading(false);
            if(currentUser) {
                axios.post("http://localhost:5000/jwt", data, {withCredentials: true}).then(res => console.log(res.data));
            }
            else {
                console.log(currentUser);
                axios.post("http://localhost:5000/logout", data, {withCredentials: true}).then(res => console.log(res.data));
            }
        })

        return () => unSubscribe();
    } , [])

    const authInfo = {
        login,
        register,
        logout,
        user,
        loading,
        update,
        googleLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;