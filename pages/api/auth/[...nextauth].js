import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "5ec7e314b88304a1d5ed",
      clientSecret: "8014f9771ffdbf02e3b644b37303d6892dfa502a",
    }),
    // ...add more providers here
  ],
  secret: "qwer1234", // Add a JWT secret token (can be a random string)
};
export default NextAuth(authOptions);
