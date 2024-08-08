// router import 
const express = require('express');
const router = express.Router();
const sender = require('../controllers/mail.controller').sender;

router.post('/mail', sender);

module.exports = router