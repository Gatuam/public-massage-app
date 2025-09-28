import { dbConnect } from "@/db";
import { getServerSession } from "next-auth";
import authOptions from "../../auth/[...nextauth]/options";
import { NextResponse } from "next/server";
import { UserModel } from "@/model/user";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const session = await getServerSession(authOptions);
    if (!session || !session?.user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const updateResult = await UserModel.updateOne(
      { _id: session.user._id },
      { $pull: { message: { _id: params.id } } }
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
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server error while deleting message",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
