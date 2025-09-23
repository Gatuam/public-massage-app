import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    isAccpectingMessage: boolean;
    username: string;
    isVerified: boolean;
  }

  interface Session {
    user: {
      id?: string;
      email: string;
      isAccpectingMessage: boolean;
      username: string;
      isVerified: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    isAccpectingMessage: boolean;
    username: string;
    isVerified: boolean;
  }
}
