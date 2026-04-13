const express = require('express');
const app = express();
const penghuniRoutes = require('./routes/penghuniRoutes');

app.use(express.json());

// route utama
app.use('/penghuni', penghuniRoutes);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Penghuni Service running on port ${PORT}`);
});