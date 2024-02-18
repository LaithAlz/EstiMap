const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await
    mongoose.connect("mongodb+srv://laith:deerhack123@cluster0.dowwnei.mongodb.net/?retryWrites=true&w=majority");
    console.log(`DB connected: ${conn.connection.host}`);
  } catch (error) {
    process.exit();
  }
};

module.exports = connectDB;
