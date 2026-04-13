let penghuni = [];

// GET
exports.getAllPenghuni = (req, res) => {
    res.json(penghuni);
};

// POST
exports.createPenghuni = (req, res) => {
    const data = req.body;
    penghuni.push(data);
    res.json({ message: "Penghuni ditambahkan", data });
};

// PUT
exports.updatePenghuni = (req, res) => {
    const id = req.params.id;
    penghuni[id] = req.body;
    res.json({ message: "Penghuni diupdate" });
};

// DELETE
exports.deletePenghuni = (req, res) => {
    const id = req.params.id;
    penghuni.splice(id, 1);
    res.json({ message: "Penghuni dihapus" });
};