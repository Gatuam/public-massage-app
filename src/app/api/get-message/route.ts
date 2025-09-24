import { dbConnect } from "@/db";
import { getServerSession, User } from "next-auth";
import authOptions from "../auth/[...nextauth]/options";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { UserModel } from "@/model/user";

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
    const userId = new mongoose.Types.ObjectId(user?.id);

    const users = await UserModel.aggregate([
      { $match: { _id: userId } },
      { $unwind: "$message" },
      { $sort: { "message.createdAt": -1 } },
      { $group: { _id: "$_id", message: { $push: "message" } } },
    ]);

    if(!users || users.length === 0 ){
         return NextResponse.json(
        {
          sucess: false,
          message: " User Not Found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
        {
          sucess: true,
          message: users[0].message,
        },
        { status: 200 }
      );
  } catch (error) {
    return NextResponse.json(
        {
          sucess: false,
          message: " User Not Found",
        },
        { status: 500 }
      );
  }
}
