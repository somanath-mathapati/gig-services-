// server.js - NearNest Main Express Server Entry Point
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./server/config/db');
const authRoutes = require('./server/routes/authRoutes');
const serviceRoutes = require('./server/routes/serviceRoutes');
const shopRoutes = require('./server/routes/shopRoutes');
const productRoutes = require('./server/routes/productRoutes');
const bookingRoutes = require('./server/routes/bookingRoutes');
const orderRoutes = require('./server/routes/orderRoutes');
const reviewRoutes = require('./server/routes/reviewRoutes');
const adminRoutes = require('./server/routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB or activate JSON persistent store
connectDB();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend assets
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/shops', shopRoutes);
app.use('/api/products', productRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    appName: 'Gig Services – On-Demand Local Services & Gig Marketplace',
    timestamp: new Date().toISOString()
  });
});

// Single Page Application Fallback
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    // If user requests /customer-login or /customer-login.html
    if (req.path === '/customer-login' || req.path === '/customer-login.html') {
      return res.sendFile(path.join(__dirname, 'public', 'customer-login.html'));
    }
    // If user requests /services-login or /services-login.html
    if (req.path === '/services-login' || req.path === '/services-login.html') {
      return res.sendFile(path.join(__dirname, 'public', 'services-login.html'));
    }
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
  next();
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Gig Services Platform is live on http://localhost:${PORT}`);
  console.log(`   Tagline: On-Demand Local Services, Home Repairs & Gig Marketplace.`);
  console.log(`=======================================================`);
});
