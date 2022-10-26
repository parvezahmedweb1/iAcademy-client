import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(firebaseApp);
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // ? create new user
  const registerEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ? update user profile
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };
  // ? email verification
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };
  // ? google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // ? github sign in
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // ? signInWithEmailAndPassword
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ? sign out
  const logout = () => {
    return signOut(auth)
      .then(() => {})
      .catch((err) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      console.log(current);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        registerEmailAndPassword,
        updateUserProfile,
        emailVerification,
        googleSignIn,
        githubSignIn,
        loginWithEmailAndPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
