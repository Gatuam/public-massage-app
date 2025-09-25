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
          success: false,
          message: "Not authenticated",
        },
        { status: 401 }
      );
    }

    const userId = new mongoose.Types.ObjectId(user._id || user.id);

    const users = await UserModel.aggregate([
      { $match: { _id: userId } },
      { $unwind: { path: "$message", preserveNullAndEmptyArrays: true } },
      { $sort: { "message.createdAt": -1 } },
      { $group: { _id: "$_id", message: { $push: "$message" } } },
    ]);

    if (!users || users.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }
    const userDoc = await UserModel.findById(userId).select("message");

    if (!userDoc) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }
    const messages = (userDoc.message || []).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );

    return NextResponse.json(
      {
        success: true,
        message: messages || [],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/get-message error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error" + error,
      },
      { status: 500 }
    );
  }
}
