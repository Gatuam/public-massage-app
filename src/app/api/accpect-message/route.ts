import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/options";
import { dbConnect } from "@/db";
import { UserModel } from "@/model/user";
import { NextResponse } from "next/server";
import { User } from "next-auth";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!user?._id || !session?.user) {
      return NextResponse.json(
        {
          sucess: false,
          message: "Not authenticated",
        },
        { status: 400 }
      );
    }
    const userId = user?._id;
    const { accpectMessages } = await req.json();
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { isAccpectionMessage: accpectMessages },
      { new: true }
    );
    if (!updatedUser) {
      return NextResponse.json(
        {
          sucess: false,
          message: "Not authenticated",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        sucess: true,
        message: "Message updated succesfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        sucess: false,
        message: "Failed to updated user status",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const user = session?.user as User;
    console.log(session);
    console.log(user);
    if (!user || !session?.user) {
      return NextResponse.json(
        {
          sucess: false,
          message: "Not authenticated",
        },
        { status: 400 }
      );
    }
    const userId = user?._id;

    const userFound = await UserModel.findById({
      _id: userId,
    });

    if (!userFound) {
      return NextResponse.json(
        {
          sucess: false,
          message: "User not found",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        isAccpectionMessage: userFound.isAccpectionMessage,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        sucess: false,
        message: "Error in getting status" + error.message,
      },
      { status: 500 }
    );
  }
}
