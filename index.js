const express = require('express');
const app = express();
const port = 3004;

app.use(express.json());

let aturan = [
  { id: 1, name: 'Aturan 1', description: 'Deskripsi aturan pertama' },
  { id: 2, name: 'Aturan 2', description: 'Deskripsi aturan kedua' }
];

app.get('/aturan', (req, res) => {
  res.status(200).json(aturan);
});

app.get('/aturan/:id', (req, res) => {
  const { id } = req.params;
  const found = aturan.find(a => a.id === parseInt(id));

  if (!found) return res.status(404).send('Aturan not found');
  res.status(200).json(found);
});

app.post('/aturan', (req, res) => {
  const { name, description } = req.body;
  const newAturan = { id: aturan.length + 1, name, description };
  aturan.push(newAturan);
  res.status(201).json(newAturan);
});

app.put('/aturan/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  let found = aturan.find(a => a.id === parseInt(id));
  if (!found) return res.status(404).send('Aturan not found');

  found.name = name || found.name;
  found.description = description || found.description;

  res.status(200).json(found);
});

app.delete('/aturan/:id', (req, res) => {
  const { id } = req.params;
  let index = aturan.findIndex(a => a.id === parseInt(id));

  if (index === -1) return res.status(404).send('Aturan not found');

  aturan.splice(index, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Aturan service running at http://localhost:${port}`);
});