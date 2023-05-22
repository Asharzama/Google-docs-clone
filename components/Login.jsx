import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();
  const handleLogin = () => {
    signIn();
  };
  if (status === "loading") {
    return <div className="flex justify-center items-center font-semibold">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/image/login.png"
        alt=""
        height={300}
        width={550}
        style={{ objectFit: "contain" }}
        priority={true}
      />
      <Button className="w-44 mt-10" color="blue" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
