import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(firebaseApp);
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
