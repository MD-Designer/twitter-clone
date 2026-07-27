import mongoose from "mongoose";
import dns from "dns/promises";
dns.setServers(["1.1.1.1", "1.0.0.1"]);

export const mongoDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error connection to mongoDB: ${error.message}`);
    process.exit(1);
  }
};
