import { app } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { updateUser } from "@/services/userDataHandler";
import NavBar from "@/components/NavBar";
import { identifierToKeywordKind } from "typescript";
import { useStore } from "@/context/Store";
export default function Home() {
  const router = useRouter();

  const userStore = useStore(); // get the email from the store
  const identifierEmail = userStore.IdentifierEmail
  const identifierToken = userStore.IdentifierToken

  const handleUpdateUser = () => {
    if (identifierEmail != null && identifierToken != null) {
      updateUser(identifierEmail, name, age, identifierToken);
    } else {
      console.log("No email/token found");
      return;
    }
  }

  useEffect(() => {
    let token = sessionStorage.getItem("Token");
    // If there is no token, redirect to register page
    if (!token) {
      router.push("/register");
    }
  }, []);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <main className="h-screen bg-bas">
      <NavBar />
      <h1 className="flex justify-center mt-2 text-3xl">Edit profile</h1>

      <div className="flex flex-col items-center h-screen">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-md mt-5"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Age"
          className="input input-bordered w-full max-w-md mt-5"
          onChange={(event) => setAge(event.target.value)}
          value={age}
        />

        <button className="btn w-full max-w-md mt-5" onClick={handleUpdateUser}>Update</button>
      </div>
    </main>
  );
}
