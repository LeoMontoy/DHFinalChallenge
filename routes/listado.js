const express = require('express');
const router = express.Router();
const Validation = require('../middlewares/validation');
const productsController = require('../controllers/productsController');

router.get('/prod', productsController.list);

module.exports = router;

