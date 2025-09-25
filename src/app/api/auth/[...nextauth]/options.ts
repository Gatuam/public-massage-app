import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { UserModel } from "@/model/user";
import { NextResponse } from "next/server";
import { dbConnect } from "@/db";
import bcrypt from "bcryptjs";
import mongoose, { Types } from "mongoose";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Username", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await dbConnect();

          if (!credentials?.email || !credentials.password) {
            throw new Error("All feilds are requied");
          }

          const existingUser = await UserModel.findOne({
            email: credentials?.email,
          });

          if (!existingUser) {
            throw new Error("No user found with this email");
          }
          if (!existingUser.isVerfied) {
            throw new Error("Please verify your account befor login");
          }
          const matchedPassword = await bcrypt.compare(
            credentials?.password,
            existingUser.password
          );
          if (!matchedPassword) {
            throw new Error("Invalid credential");
          }
          return {
            _id: (existingUser._id as mongoose.Types.ObjectId).toString(),
            id: (existingUser._id as mongoose.Types.ObjectId).toString(),
            email: existingUser.email,
            username: existingUser.username,
            name: existingUser.username,
            isAccpectionMessage: existingUser.isAccpectionMessage,
            isVerified: existingUser.isVerfied
          };
        } catch (error: any) {
          throw new Error("Server error while sign-in", error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.isAccpectionMessage = token.isAccpectionMessage;
        session.user._id = token._id?.toString();
        session.user.email = token.email;
        session.user.username = token.username;
        session.user.isVerified = token.isVerified;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.email = user.email;
        token.username = user.username;
        token.isAccpectionMessage = user.isAccpectionMessage;
        token.isVerified = user.isVerified;
      }
      return token;
    },
  },
};

export default authOptions;
