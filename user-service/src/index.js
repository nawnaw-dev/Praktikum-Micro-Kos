const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.json(users);
});

app.post("/", (req, res) => {
  users.push(req.body);
  res.json({ message: "Users ditambah" });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});