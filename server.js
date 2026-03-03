const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

// 👇 ADD THIS LINE HERE
app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("Auth System API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});