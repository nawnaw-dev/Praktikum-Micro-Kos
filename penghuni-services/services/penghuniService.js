const Penghuni = require('../models/penghuniModel');

let penghuni = [];

exports.getAll = () => {
    return penghuni;
};

exports.create = (data) => {
    const newData = new Penghuni(
        penghuni.length,
        data.nama,
        data.no_hp,
        data.kamar_id
    );

    penghuni.push(newData);
    return newData;
};

exports.update = (id, data) => {
    penghuni[id] = { ...penghuni[id], ...data };
    return penghuni[id];
};

exports.remove = (id) => {
    return penghuni.splice(id, 1);
};