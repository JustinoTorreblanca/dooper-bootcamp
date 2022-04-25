import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@src/contexts/AuthContext";
import { supabase } from "@src/utils/supabaseClient";

export interface PrivateRouteProps {
  requiredPermission: string;
}

const PrivateComponent: React.FC<PrivateRouteProps> = (props) => {
  const [isAuthorized, setisAuthorized] = useState<boolean>();
  const { session, user } = useAuth();
  const [checkSession, setCheckSession] = useState();

  useEffect(() => {
    setCheckSession(session);

    supabase.auth.onAuthStateChange((_event, checkSession) => {
      setCheckSession(checkSession);
    });
  }, []);

  return (
    <>
      {session && user ? (
        props.children
      ) : (
        <p>
          Cannot access to Profile, please
          <Link href="/login">
            <a> Login </a>
          </Link>
          or
          <Link href="/register">
            <a> Register</a>
          </Link>
        </p>
      )}
    </>
  );
};

export default PrivateComponent;
