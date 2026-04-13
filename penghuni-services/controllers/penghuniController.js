const service = require('../services/penghuniService');

exports.getAllPenghuni = (req, res) => {
    res.json(service.getAll());
};

exports.createPenghuni = (req, res) => {
    const data = service.create(req.body);
    res.json({ message: "Penghuni ditambahkan", data });
};

exports.updatePenghuni = (req, res) => {
    const data = service.update(req.params.id, req.body);
    res.json({ message: "Penghuni diupdate", data });
};

exports.deletePenghuni = (req, res) => {
    service.remove(req.params.id);
    res.json({ message: "Penghuni dihapus" });
};