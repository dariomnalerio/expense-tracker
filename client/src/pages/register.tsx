import { app } from "../../firebaseConfig";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";

export default function Register() {
  const auth = getAuth(app); // get the auth object from firebase
  const router = useRouter(); // get the router object from nextjs
  const googleProvider = new GoogleAuthProvider(); // create a google provider
  const githubProvider = new GithubAuthProvider(); // create a github provider
  const [email, setEmail] = useState(""); // set the email state
  const [password, setPassword] = useState(""); // set the password state

  // Email and password sign up
  const signUp = async () => {
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      console.log(response.user);
      router.push("/"); // if the user is created, redirect to the home page
    });
  };

  // Google sign up
  const googleSignUp = async () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      console.log(response.user);
      router.push("/");
    });
  };

  // Github sign up
  const githubSignUp = async () => {
    signInWithPopup(auth, githubProvider).then((response) => {
      console.log(response.user);
      router.push("/");
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="mt-5 flex flex-col items-center align-middle">
      <h1>Register</h1>

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

      <button className="btn w-full max-w-md mt-3" onClick={signUp}>
        Sign Up
      </button>
      <button className="btn w-full max-w-md mt-3" onClick={googleSignUp}>
        Google Sign Up
      </button>
      <button className="btn w-full max-w-md mt-3" onClick={githubSignUp}>
        Github Sign Up
      </button>
    </div>
  );
}
