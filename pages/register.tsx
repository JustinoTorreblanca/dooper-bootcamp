import Link from "next/link";

const Register = () => {
  return (
    <div>
      Register
      <br />
      <Link href={"/login"}>
        <a>Login</a>
      </Link>
      <br />
      <Link href={"/profile"}>
        <a>Profile</a>
      </Link>
    </div>
  );
};

export default Register;
