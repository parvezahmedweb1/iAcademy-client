import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(firebaseApp);
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const registerEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <AuthContext.Provider value={{ registerEmailAndPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
