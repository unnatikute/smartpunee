const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const cors = require('cors');
const categoryRoutes = require('./routes/category');
const shopRoutes = require('./routes/shops');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // serve uploaded images
app.use('/api/auth', authRoutes);
app.use('/api/shops', shopRoutes); // ✅ mount it
app.use('/api/categories', categoryRoutes);


app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});
