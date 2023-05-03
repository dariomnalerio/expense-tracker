import { app } from "../../firebaseConfig";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let token = sessionStorage.getItem("Token");
    // If there is no token, redirect to register page
    if (!token) {
      router.push("/register");
    }
  }, []);

  return (
    <main className="h-screen bg-bas">
      <h1 className="flex justify-center mt-2 text-3xl">Home</h1>

      <div className="flex flex-col items-center h-screen">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-md mt-5"
        />
        <input
          type="text"
          placeholder="Age"
          className="input input-bordered w-full max-w-md mt-5"
        />

        <button className="btn w-full max-w-md mt-5">ADD</button>
      </div>
    </main>
  );
}
