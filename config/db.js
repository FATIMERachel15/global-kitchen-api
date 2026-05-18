// Database connection setup using Mongoose
const mongoose = require("mongoose");

// Load environment variables
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;