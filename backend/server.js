const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { registerUser } = require('./users');
const app = express();
const PORT = 4000;
// Register user endpoint
app.post('/api/register', (req, res) => {
  const { email, method } = req.body;
  if (!email || !method) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const result = registerUser({ email, method });
  if (result.status === 'success') {
    return res.json({ success: true, message: result.message });
  } else {
    return res.status(409).json({ success: false, message: result.message });
  }
});

app.use(cors());
app.use(bodyParser.json());

// In-memory store for demo (replace with DB in production)
let history = [];

// Get all history
app.get('/api/history', (req, res) => {
  res.json(history);
});

// Add a deposit or withdraw
app.post('/api/history', (req, res) => {
  const { type, address, date } = req.body;
  if (!type || !address || !date) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  history.push({ type, address, date });
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
