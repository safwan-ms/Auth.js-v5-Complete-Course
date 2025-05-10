import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("MongoDB connected Successfully ✅");
  } catch (error: unknown) {
    const e = error as Error;
    console.log("MongoDB connection failed ❎ ", e.message);
  }
};

export default connectDB;
