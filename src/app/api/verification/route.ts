import { dbConnect } from "@/db";
import sendMail from "@/mail/mail";
import { UserModel } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { code } = await req.json();
    const user = await UserModel.findOne({
      verifyCode: code,
    });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User dont not exist! please login 1ft",
        },
        {
          status: 404,
        }
      );
    }

    const isCodeValid = user.verifyCode === code;
    const isCodeExpired = new Date(user.verifyCodeExp.getTime()) < new Date();

    if (isCodeExpired || !isCodeValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid verification code",
        },
        { status: 403 }
      );
    }

    user.isVerfied = true;
    await user.save();
    return NextResponse.json(
      {
        success: true,
        message: "Verified successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal error",
      },
      { status: 500 }
    );
  }
}
