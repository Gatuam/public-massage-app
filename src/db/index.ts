import mongoose from "mongoose";

type ConnectObj = {
  isConnect?: number;
};

const connection: ConnectObj = {};

const DATABASE_URL = process.env.DATABASE_URL;



export const dbConnect = async (): Promise<void> => {
  if (connection.isConnect) {
    console.log("Already connect");
    return;
  }
  try {
    const db = await mongoose.connect(DATABASE_URL!);
    console.log(db);
    connection.isConnect = db.connections[0].readyState;

    if (connection.isConnect) {
      console.log("db connected");
    }
  } catch (error) {
    console.log("db connect failed");
    process.exit(1);
  }
};

dbConnect();
