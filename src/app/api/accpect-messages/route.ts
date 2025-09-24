import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/options";
import { dbConnect } from "@/db";
import { UserModel } from "@/model/user";
import { NextResponse } from "next/server";
import { User } from "next-auth";

export async function PSOT(req: Request) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const user = session?.user as User;
    if (!user || !session) {
      return NextResponse.json(
        {
          sucess: false,
          message: "Not authenticated",
        },
        { status: 400 }
      );
    }
    const userId = user?.id;
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
    if (!user || !session) {
      return NextResponse.json(
        {
          sucess: false,
          message: "Not authenticated",
        },
        { status: 400 }
      );
    }
    const userId = user?.id;

    const userFound = await UserModel.findById({
      userId: userId,
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
        isAccpectingMessage: userFound.isAccpectionMessage,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        sucess: false,
        message: "Error in getting status" + error,
      },
      { status: 500 }
    );
  }
}
