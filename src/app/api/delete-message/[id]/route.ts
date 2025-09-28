import { dbConnect } from "@/db";
import { getServerSession } from "next-auth";
import authOptions from "../../auth/[...nextauth]/options";
import { NextResponse } from "next/server";
import { UserModel } from "@/model/user";

export async function DELETE(req: Request) {
  await dbConnect();

  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Message ID not provided" },
        { status: 400 }
      );
    }

    const updateResult = await UserModel.updateOne(
      { _id: session.user._id },
      { $pull: { message: { _id: id } } }
    );

    if (updateResult.modifiedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message Deleted" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Server error while deleting message",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
