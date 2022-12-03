const express = require('express');

const router = express.Router();

// Import Controllers Email
const emailRoutes = require('../controllers/emailController');

// Route Email
router.post('/send-email', emailRoutes.sendEmail);

module.exports = router;
