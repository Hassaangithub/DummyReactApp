import React from "react";
import styles from "./LandingPageStyles";
import { useRouter } from "next/router";

function LandingPage() {
  const router = useRouter();
  return (
    <div className="container">
      <button onClick={() => router.push("/login")}>Login</button>
      <style jsx>{styles}</style>
    </div>
  );
}

export default LandingPage;
