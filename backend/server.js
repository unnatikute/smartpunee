const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use('/uploads', express.static('uploads'));

// ✅ MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // Your MySQL user
  password: '',   // Your MySQL password (often blank for XAMPP)
  database: 'smartpune'
});

db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
    return;
  }
  console.log('✅ MySQL connected!');
});

// ✅ Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder to save
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueName + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// ✅ POST /register with file upload
app.post('/register', upload.single('image'), (req, res) => {
  const { shopName, ownerName, phone, email, city, category, offer } = req.body;
  const image = req.file ? req.file.filename : null;

  const sql = `INSERT INTO shops (shopName, ownerName, phone, email, city, category, offer, image)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [shopName, ownerName, phone, email, city, category, offer, image], (err, result) => {
    if (err) {
      console.error('❌ Error saving shop:', err);
      return res.status(500).send('Database error');
    }
    console.log('✅ Shop registered:', result.insertId);
    res.send('Shop registered successfully!');
  });
});

// ✅ Start server
app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
