import NavBar from "@/components/NavBar";
import { useStore } from "../context/Store";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../firebaseConfig";
import { useRouter } from "next/router";
import { isJSDocThrowsTag } from "typescript";
import * as jwt from 'jsonwebtoken';

export default function Login() {

  const auth = getAuth(app); // get the auth object from firebase
  const router = useRouter(); // get the router object from nextjs

  const setIdentifier = useStore((state) => state.setIdentifier)

  const [email, setEmail] = useState(""); // set the email state
  const [password, setPassword] = useState(""); // set the password state

  const signIn = async () => {
    try {
      const userCredential =  await signInWithEmailAndPassword(auth, email, password);

      const userData = await userCredential // true = refresh token

      sessionStorage.setItem("Token", JSON.stringify(userData));

      router.push("/");

      const access_token = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET || '')

      setIdentifier(access_token)
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (token) {
      router.push("/");
    }
  }, []);
  
  return (
    <div>
      <NavBar />
      <h1 className="mt-5">Log in</h1>

      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full max-w-md mt-5"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full max-w-md mt-2"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />

      <button className="btn w-full max-w-md mt-3" onClick={signIn}>
        log in
      </button>
    </div>
  );
}
