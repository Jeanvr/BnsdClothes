import { sign } from "crypto";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc"




const Login = () => {
  return <div className="bg-black min-h-screen flex items-center justify-center">
        <button className="bg-white px-8 py-4 flex items-center justify-center" onClick={() => signIn("google")}>
            <FcGoogle size= {30} /> Sign In with Google

        </button>

  </div>; 
}

export default Login;
