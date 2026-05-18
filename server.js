const express = require("express");
const dotenv = require("dotenv");

// Connect to database
const connectDB = require("./config/db");

// Import routes
const recipeRoutes = require("./routes/recipeRoutes");

// Import error handling middleware
const errorHandler = require("./middleware/errorMiddleware");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use recipe routes
app.use("/recipes", recipeRoutes);

// Use error handling middleware
app.use(errorHandler);

// Basic route to check if API is running
app.get("/", (req, res) => {
  res.send("Global Kitchen API Running");
});

// Start the server
const PORT = process.env.PORT || 5000;

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});