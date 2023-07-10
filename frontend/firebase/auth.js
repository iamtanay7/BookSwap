import { useEffect, useContext, createContext, useState } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth } from "./firebase";

const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
});

export const AuthUserProvider = ({ children }) => {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };

  const authStateChanged = async (user) => {
    setIsLoading(true);
    if (!user) {
      clear();
      return;
    }
    setAuthUser({
      uid: user.uid,
      email: user.email,
      username: user.displayName,
      photo: user.photoURL,
    });
    setIsLoading(false);
  };

  const signOut = () => {
    authSignOut(auth).then(() => clear());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
    setAuthUser,
    signOut,
  };
}
