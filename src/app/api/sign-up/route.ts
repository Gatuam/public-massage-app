import { dbConnect } from "@/db";
import { UserModel } from "@/model/user";
import bcryptjs from 'bcryptjs'
import { signUpSchema } from "@/schema";
import * as z from 'zod'
import sendMail from "@/mail/mail";
import { ApiResponse } from "@/types/types";

export default async function POST(req: Request){
  try {
    await dbConnect();
  const {username, password, email} = await req.json();

    const existingUserbyEmail = await UserModel.findOne({
        username
    });
    if(existingUserbyEmail){
        return Response.json({
            success : false
        })
    }
  } catch (error) {
    console.error('Error while registering user', error)
    return Response.json({
        success : false,
        message : "Server Error while registering user!"
    }, {
        status : 500
    })
  }
}