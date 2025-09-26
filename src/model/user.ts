import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  _id: string,
  content: string;
  createdAt: Date;
}

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExp: Date;
  isAccpectionMessage: boolean;
  isVerfied: boolean;
  message: Message[];
}

export const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "User name is already taken"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please use a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verifycode is required"],
  },
  verifyCodeExp: {
    type: Date,
    required: [true, "Verifycode is required"],
  },
  isAccpectionMessage: {
    type: Boolean,
    default: false,
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  message: [MessageSchema],
});

export const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);
