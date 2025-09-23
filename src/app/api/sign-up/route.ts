import { dbConnect } from "@/db";
import { UserModel } from "@/model/user";
import bcryptjs from "bcryptjs";
import { signUpSchema } from "@/schema";
import * as z from "zod";
import sendMail from "@/mail/mail";

export const runtime = "nodejs";


export async function POST(req: Request) {
  try {
    await dbConnect();
    const { username, password, email } = await req.json();

    const verificationToken = crypto.randomUUID().slice(0, 6);
    const tokenExpiry = new Date(Date.now() + 1000 * 60 * 10);

    const existingUserbyUserName = await UserModel.findOne({
      username,
      isVerfied: true,
    });

    if (existingUserbyUserName) {
      return Response.json(
        {
          success: false,
          message: "Username is already taken",
        },
        {
          status: 400,
        }
      );
    }

    const existingUserbyEmail = await UserModel.findOne({
      email,
    });

    if (existingUserbyEmail) {
      if (existingUserbyEmail?.isVerfied) {
        return Response.json(
          {
            success: false,
            message: "Email is already taken",
          },
          {
            status: 400,
          }
        );
      } else {
        const hashedPassword = await bcryptjs.hash(password, 10);
        await UserModel.updateOne(
          { email: existingUserbyEmail.email },
          {
            password: hashedPassword,
            verifyCode: verificationToken,
            verifyCodeExp: tokenExpiry,
          }
        );
        await sendMail(
          existingUserbyEmail.email,
          "Email verificatin",
          verificationToken
        );
        return Response.json({
          success: true,
          message: "Verification code resent, please check your email",
        });
      }
    } else {
      const hashedPassword = await bcryptjs.hash(password, 10);
      const newUser = await UserModel.create({
        username,
        email,
        password: hashedPassword,
        verifyCode: verificationToken,
        verifyCodeExp: tokenExpiry,
        isVerfied: false,
      });
      await sendMail(email, "Email verification", verificationToken);

      if (newUser) {
        return Response.json({
          success: true,
          message: "User created Successfully",
        });
      }
    }
  } catch (error) {
    console.log("Error while registering user", error);
    return Response.json(
      {
        success: false,
        message: "Server Error while registering user!",
      },
      {
        status: 500,
      }
    );
  }
}
