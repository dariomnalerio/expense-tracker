import { app } from "../../firebaseConfig";
import { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createUser } from "@/services/userDataHandler";
import NavBar from "@/components/NavBar";
import { useStore } from "../context/Store";
import * as jwt from "jsonwebtoken";
import { getIdToken } from "firebase/auth";

export default function Register() {
  const auth = getAuth(app); // get the auth object from firebase
  const user = auth.currentUser; // get the current user if there is one

  const router = useRouter(); // get the router object from nextjs

  const [email, setEmail] = useState(""); // set the email state
  const [password, setPassword] = useState(""); // set the password state

  const setIdentifierEmail = useStore((state) => state.setIdentifierEmail);

  // Email and password sign up
  const signUp = async () => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Get user token
      const userData = await userCredential.user;

      
      // Store user token in session storage
      sessionStorage.setItem("Token", JSON.stringify(userData));
      
      // Redirect user to home page
      router.push("/");
      
      // Create user in database
      const userEmail = userData.email;
      const userUid = userData.uid;
      const userToken = await getIdToken(userData); // needed to validate user
      await createUser(userEmail, userUid, userToken);

      setIdentifierEmail(userEmail);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // user is logged in
    } else {
      // user is logged out
    }
  });

  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (token) {
      router.push("/");
    }
  }, []);

  return (
    <div className="flex flex-col items-center align-middle">
      <NavBar />

      <h1 className="mt-5">Register</h1>

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
    </div>
  );
}
