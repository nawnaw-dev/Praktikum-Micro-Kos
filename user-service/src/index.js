const express = require("express");
const app = express();
const PORT = 3002;

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("User Service Running 🚀");
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});