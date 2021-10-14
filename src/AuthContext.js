import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [signInState, setSignInState] = useState(false);

  const signin = () => {
    setSignInState(true);
  };
  const signout = () => {
    setSignInState(false);
  };
  const AuthContentValue = { signin, signout, signInState };
  return <AuthContext.Provider value={AuthContentValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
