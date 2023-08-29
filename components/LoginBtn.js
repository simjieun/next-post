"use client";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "@/app/firebase";

export default function LoginBtn() {
  // const googleSignIn = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider);
  // };

  // const session = useSession();
  // console.log(session);
  return (
    <>
      {/* <button onClick={() => signIn("github")}>Github Login</button>
      <button onClick={() => googleSignIn()}>Google Login</button>
      <button onClick={() => signOut()}>Sign out</button> */}
      <button onClick={()=>console.log("LoginBtn")}>LoginBtn</button>
    </>
  );
}
