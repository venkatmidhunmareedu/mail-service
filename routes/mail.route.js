// router import 
const express = require('express');
const router = express.Router();
const {sender} = require('../controllers/mail.controller');
const { authenticateToken } = require('../middleware/auth');

router.post('/sendnow', authenticateToken , sender);

module.exports = router