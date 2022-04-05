import Link from "next/link";

const Profile = () => {
  return (
    <div>
      Profile
      <br />
      <Link href={"/login"}>
        <a>Login</a>
      </Link>
      <br />
      <Link href={"/register"}>
        <a>Register</a>
      </Link>
    </div>
  );
};

export default Profile;
