const express = require('express');

const path = require('path');

const productsControllers = require('../controllers/products');

const router = express.Router();

router.get('/contactus', productsControllers.getContactus);

router.post('/contactus', productsControllers.postContactus);

module.exports = router;