const express = require('express');
const app = express();
app.use(express.json());

const produtos = [{ id: 1, nome: 'Notebook', preco: 3500 }];

app.get('/produtos', (req, res) => res.json(produtos));
app.get('/produtos/:id', (req, res) => {
  const p = produtos.find(x => x.id == req.params.id);
  p ? res.json(p) : res.status(404).json({ erro: 'produto nao encontrado' });
});
app.post('/produtos', (req, res) => { produtos.push({ id: produtos.length + 1, ...req.body }); res.status(201).json(produtos.at(-1)); });

app.listen(3000, () => console.log('API em http://localhost:3000/produtos'));
