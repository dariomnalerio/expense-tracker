import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    let userData = sessionStorage.getItem("Token");
    // If there is no token, redirect to register page
    
    if (!userData) {
      setLoggedIn(false);
    } else {
      const userEmail = JSON.parse(userData).email;
      setEmail(userEmail);
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <main>
        <NavBar />

        <div className="text-center mt-10">
          {loggedIn ? (
            <div>
              <h1 className="text-5xl">Welcome {email}</h1>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl">
                You need to{" "}
                <a href="/login" className="link link-primary">
                  login
                </a>
              </h1>
              <p>
                Don't have an account? <a href="/login" className="link">Sign up!</a>
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
