import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DataBase Connected Sucessfully");
  } catch (error) {
    console.error(`"Error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
