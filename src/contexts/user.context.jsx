import { useState, createContext, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

const defaultValue = {
  currentUser: null,
  setCurrentUser: () => {},
};

export const UserContext = createContext(defaultValue);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (isMounted) setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
