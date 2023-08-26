const express = require('express');

const path = require('path');

const router = express.Router();

const productsControllers = require('../controllers/products');

router.get('/success', productsControllers.getSuccess);

module.exports = router;