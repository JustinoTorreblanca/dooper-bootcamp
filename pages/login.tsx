import Link from "next/link";

const Login = () => {
  return (
    <div>
      Login
      <br />
      <Link href={"/register"}>
        <a>Register</a>
      </Link>
      <br />
      <Link href={"/profile"}>
        <a>Profile</a>
      </Link>
    </div>
  );
};

export default Login;
