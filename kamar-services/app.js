const express = require("express");
const app = express();

app.use(express.json());

let kamar = [];

app.get("/", (req, res) => {
  res.json(kamar);
});

app.post("/", (req, res) => {
  kamar.push(req.body);
  res.json({ message: "Kamar ditambah" });
});

app.get("/:id", (req, res) => {
  res.json(kamar.find(k => k.id == req.params.id));
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Kamar service running on port ${PORT}`);
});