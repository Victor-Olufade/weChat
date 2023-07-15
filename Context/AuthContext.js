import { createContext, useState } from "react";

export const AuthUserContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthUserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};
