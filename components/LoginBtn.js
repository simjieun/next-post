"use client";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  return (
    <>
      <button onClick={() => signIn("github")}>Github Login</button>
      <button onClick={() => signIn("google")}>Google Login</button>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
