const express = require("express");
const app = express();

app.use(express.json());

let aturan = [];

app.get("/", (req, res) => {
  res.json(aturan);
});

app.post("/", (req, res) => {
  aturan.push(req.body);
  res.json({ message: "Aturan ditambah" });
});

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`Aturan service running on port ${PORT}`);
});