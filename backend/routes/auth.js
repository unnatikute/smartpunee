const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

const multer = require('multer');
const path = require('path');

// Setup Multer to store files in /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Register route
router.post(
  '/register',
  upload.single('profileImage')
),
  async (req, res) => {
    let { name, email, password, role, shopName, categoryId } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // ✅ Always store lowercase role
    role = role.toLowerCase();
    if (role === 'admin') {
      return res.status(403).json({ error: 'You cannot register as admin.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const profileImagePath = req.files['profileImage']
      ? req.files['profileImage'][0].path
      : null;

    const shopImagePath = req.files['shopImage']
      ? req.files['shopImage'][0].path
      : null;

    const sqlUser = `
      INSERT INTO users (name, email, password, role, profileImage, shopName)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
      sqlUser,
      [name, email, hashedPassword, role, profileImagePath],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'DB error inserting user' });
        }

        const userId = result.insertId;

        // ✅ JWT with lowercase role
        const token = jwt.sign(
          { id: userId, role, email },
          'SECRET_KEY',
          { expiresIn: '1h' }
        );

        return res.json({
          message: 'User registered successfully!',
          token,
          role, // ✅ already lowercase
        });
      }
    );
  }


// Login route
router.post('/login', (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ error: 'Email, password, and role are required.' });
  }

  const sql = 'SELECT * FROM users WHERE email = ? AND role = ?';

  db.query(sql, [email, role.toLowerCase()], async (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });

    if (results.length === 0) {
      return res.status(400).json({ error: 'User not found with given role.' });
    }

    const user = results[0];
    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role.toLowerCase(), email: user.email },
      'SECRET_KEY',
      { expiresIn: '1h' }
    );

    return res.json({
      message: 'Login successful',
      token,
      role: user.role.toLowerCase(),
    });
  });
});
router.post('/login', (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ error: 'Email, password, and role are required.' });
  }

  const sql = 'SELECT * FROM users WHERE email = ? AND role = ?';

  db.query(sql, [email, role.toLowerCase()], async (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });

    if (results.length === 0) {
      return res.status(400).json({ error: 'User not found with given role.' });
    }

    const user = results[0];
    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role.toLowerCase(), email: user.email },
      'SECRET_KEY',
      { expiresIn: '1h' }
    );

    return res.json({
      message: 'Login successful',
      token,
      role: user.role.toLowerCase(),
    });
  });
});


module.exports = router;
