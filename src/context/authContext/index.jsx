import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebaseConfig/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    return () => unsubscribe();
  });

  return (
    <AuthContext.Provider value={{ user, loader }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
