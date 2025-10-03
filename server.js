import express from 'express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const USERS_FILE = path.join(__dirname, '../privyUsers.json');

app.use(bodyParser.json());

app.post('/api/privyUsers', (req, res) => {
  const newUser = req.body;
  let users = [];
  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
  }
  if (!users.find(u => u.email === newUser.email)) {
    users.push(newUser);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    return res.status(201).json({ message: 'User added', user: newUser });
  }
  res.status(200).json({ message: 'User already exists' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
