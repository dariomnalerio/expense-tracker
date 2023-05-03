import NavBar from "@/components/NavBar";
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
    <main>
      <NavBar />

      <h1 className="text-6xl mt-20 text-center"> Welcome user</h1>
    </main>
  );
}
