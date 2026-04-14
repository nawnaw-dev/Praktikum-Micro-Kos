const express = require("express");
const app = express();

app.use(express.json());

let penghuni = [];

app.get("/", (req, res) => {
  res.json(penghuni);
});

app.post("/", (req, res) => {
  penghuni.push(req.body);
  res.json({ message: "Penghuni ditambah" });
});

app.get("/:id", (req, res) => {
  res.json(penghuni.find((k) => k.id == req.params.id));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Penghuni service running on port ${PORT}`);
});
