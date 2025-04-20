const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite DB
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )`);
  }
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Missing fields' });
  const hashedPassword = await bcrypt.hash(password, 10);
  db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], function(err) {
    if (err) {
      return res.status(400).json({ message: 'User already exists' });
    }
    res.json({ message: 'User registered successfully' });
  });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (err || !user) return res.status(401).json({ message: 'Invalid credentials' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful', user: { id: user.id, username: user.username } });
  });
});

app.listen(port, () => {
  console.log(`Auth server running at http://localhost:${port}`);
});
// Rename to .cjs for CommonJS compatibility
