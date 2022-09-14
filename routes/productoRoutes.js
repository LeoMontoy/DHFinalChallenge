const express = require('express');
const router = express.Router();
const Validation = require('../middlewares/validation');
const productsController = require('../controllers/productsController');

router.get('/', productsController.list);
router.get('/lista', productsController.list);

module.exports = router;

