import { createContext, useState } from "react";
import { axiosPrivate } from "../api/axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({});

  const logout = async () => {
    await axiosPrivate
      .get("/logout")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
