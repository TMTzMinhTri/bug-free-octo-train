import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import AuthenticateContext from "../contexts/AuthenticateContext";
import { auth } from "../libs/firebase";
import userService from "../services/user.service";

const AuthenticateProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log("user: " + user);
      if (user) {
        const info = await userService.getUserInfo(auth.uid);
        console.log(info);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <AuthenticateContext.Provider value={{ currentUser, language }}>
      {children}
    </AuthenticateContext.Provider>
  );
};

export default AuthenticateProvider;
