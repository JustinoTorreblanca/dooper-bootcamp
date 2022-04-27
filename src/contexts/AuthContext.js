import React, { useContext, useEffect, useState } from "react";
import { supabase } from "@src/utils/supabaseClient";

/* export type AuthContextProps = {
  signup: () => void;
  login: () => void;
  logout: () => void;
}; */
export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth?.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const user = supabase.auth.user();
  console.log("user: ", user);
  console.log("session", session);

  function logout() {
    supabase.auth.signOut();
  }

  const value = {
    session,
    user,
    logout
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
