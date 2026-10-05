const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(ORDERS_FILE)) fs.writeFileSync(ORDERS_FILE, '[]', 'utf8');

app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));

function readOrders() {
  try {
    const data = JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8'));
    return Array.isArray(data) ? data : [];
  } catch { return []; }
}
function writeOrders(orders) {
  const tmp = ORDERS_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(orders, null, 2), 'utf8');
  fs.renameSync(tmp, ORDERS_FILE);
}

app.get('/api/orders', (req, res) => {
  res.json(readOrders());
});

app.post('/api/orders', (req, res) => {
  const order = req.body;
  if (!order || !order.code || !order.customer || !Array.isArray(order.items)) {
    return res.status(400).json({ error: 'Invalid order' });
  }
  const orders = readOrders();
  const existing = orders.findIndex(o => o.code === order.code);
  if (existing >= 0) orders[existing] = order;
  else orders.unshift(order);
  writeOrders(orders);
  res.status(201).json(order);
});

app.patch('/api/orders/:code', (req, res) => {
  const orders = readOrders();
  const index = orders.findIndex(o => o.code === req.params.code);
  if (index < 0) return res.status(404).json({ error: 'Order not found' });
  if (!['new', 'accepted', 'rejected'].includes(req.body.status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }
  orders[index].status = req.body.status;
  writeOrders(orders);
  res.json(orders[index]);
});

app.delete('/api/orders', (req, res) => {
  writeOrders([]);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`El OUD ELMALAKI running on port ${PORT}`);
});
