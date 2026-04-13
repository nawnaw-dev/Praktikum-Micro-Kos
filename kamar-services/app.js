const express = require("express");
const app = express();

app.use(express.json());

// data sementara (nanti bisa pakai database)
let kamar = [];

// GET semua kamar
app.get("/kamar", (req, res) => {
  res.json(kamar);
});

// POST tambah kamar
app.post("/kamar", (req, res) => {
  const data = req.body;
  kamar.push(data);
  res.json({
    message: "Kamar berhasil ditambahkan",
    data: data
  });
});

// GET kamar by id
app.get("/kamar/:id", (req, res) => {
  const data = kamar.find(k => k.id == req.params.id);
  res.json(data);
});

// PUT update kamar
app.put("/kamar/:id", (req, res) => {
  kamar = kamar.map(k =>
    k.id == req.params.id ? req.body : k
  );
  res.json({ message: "Kamar berhasil diupdate" });
});

// DELETE kamar
app.delete("/kamar/:id", (req, res) => {
  kamar = kamar.filter(k => k.id != req.params.id);
  res.json({ message: "Kamar berhasil dihapus" });
});

app.listen(3001, () => {
  console.log("Kamar service jalan di port 3001");
});