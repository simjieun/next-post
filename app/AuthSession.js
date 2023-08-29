"use client";
import { SessionProvider } from "next-auth/react";

export default function AutSession({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
