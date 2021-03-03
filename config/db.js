import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connectDb = async () => {
  try {
    const con = await mongoose.connect("mongodb://127.0.0.1:27017/alumni-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("mongo connected!");
  } catch (e) {
    console.log(e.message);
  }
};

export default connectDb;
