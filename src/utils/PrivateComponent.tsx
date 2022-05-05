import Link from "next/link";
import { useAuth } from "@src/contexts/AuthContext";

export interface PrivateRouteProps {
  requiredPermission: string;
}

const PrivateComponent: React.FC<PrivateRouteProps> = (props) => {
  const { session, user } = useAuth();

  return (
    <>
      {session && user ? (
        props.children
      ) : (
        <p>
          Cannot access to this page, please
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
