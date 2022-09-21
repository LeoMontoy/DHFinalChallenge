const express = require('express');
const router = express.Router();
const Controller = require('../controllers/APIcontroller')
const APIcontroller = require('../controllers/APIcontroller');

//API Routes


router.get('/products',APIcontroller.products);
router.get('/products/:id',APIcontroller.detalle);
router.get('/brand', APIcontroller.brand)

module.exports = router;
