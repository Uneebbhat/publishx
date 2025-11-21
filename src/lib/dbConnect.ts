import mongoose from "mongoose";
import { ConnectionObject } from "@/types/types";

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(
      (process.env.MONGODB_URI! as string) || ""
    );

    console.log("Database connected successfully");

    connection.isConnected = db.connections[0].readyState;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`Database connection failed: ${error}`);

      process.exit(1);
    }
  }
}

export default dbConnect;
