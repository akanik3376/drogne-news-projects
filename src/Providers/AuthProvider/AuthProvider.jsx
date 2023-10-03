/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // create signup user

    const handelCreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user

    const loginUser = (email, password) => {

        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    // singout
    const singOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // use useefect for set user
    useEffect(() => {
        const unSubscrib = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscrib()
        }
    }, [])

    const AuthInfo = {
        user,
        loading,
        handelCreateUser,
        loginUser,
        singOutUser
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;