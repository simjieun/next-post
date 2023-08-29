import NextAuth from "next-auth";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { firestore } from "@/app/firebase";

export const authOptions = {
  adapter: FirebaseAdapter(firestore),
  secret: "qwer1234", // Add a JWT secret token (can be a random string)
};

export default NextAuth(authOptions);
