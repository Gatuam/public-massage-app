import { dbConnect } from "@/db";
import { NextResponse } from "next/server";
import { Message, UserModel } from "@/model/user";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { username, content } = await req.json();

    if(!username || !content){
      return NextResponse.json({
        success : false,
        message : 'User name and content are required'
      }, { status : 403})
    }

    const existingUser = await UserModel.findOne({
      username,
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          sucess: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }
    if (!existingUser.isAccpectionMessage) {
      return NextResponse.json(
        {
          sucess: false,
          message: "User does not accpecting message",
        },
        { status: 403 }
      );
    }

    const newMessage = { content };
    existingUser.message.push(newMessage as Message);
    await existingUser.save();
    return NextResponse.json(
      {
        sucess: true,
        message: "Message sent",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        sucess: false,
        message: "error while sending message " + error,
      },
      { status: 500 }
    );
  }
}
