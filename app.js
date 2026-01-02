const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});