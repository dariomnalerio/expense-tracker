import NavBar from "@/components/NavBar";
import { useStore } from "../context/Store";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../firebaseConfig";
import { useRouter } from "next/router";
import { isJSDocThrowsTag } from "typescript";
import { getIdToken } from "firebase/auth";

export default function logOut() {

  const auth = getAuth(app); // get the auth object from firebase
  const router = useRouter(); // get the router object from nextjs

  const setIdentifierEmail = useStore((state) => state.setIdentifierEmail)

  const signOut = async () => {
    try {
      await auth.signOut();
      sessionStorage.removeItem('Token')
      setIdentifierEmail(null);
      router.push("/login");
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (!token) {
      router.push("/");
    }
  }, []);


  return (
    <div>

      <button className="btn w-full max-w-md mt-3" onClick={signOut}>
        LOG OUT
      </button>
    </div>
  );
}
