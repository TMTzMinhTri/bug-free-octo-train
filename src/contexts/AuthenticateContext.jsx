import { createContext } from "react";

const AuthenticateContext = createContext({
  currentUser: null,
  language: "en",
});

export default AuthenticateContext;
