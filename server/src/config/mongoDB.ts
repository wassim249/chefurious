import { Mongoose } from "mongoose";

const {connect} = require("mongoose");

exports.connectDB = async () => {
  try {
    const conn : Mongoose = await connect(process.env.MONGO_URI);
    console.log(`CONNECT TO MONGODB : ${conn.connection.host}`);
  } catch (error : any) {
    console.log(`MONGO ERROR : ${error.message}`);
    process.exit(1)
  }
};