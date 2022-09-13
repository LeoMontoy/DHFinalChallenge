const express = require('express');
const router = express.Router();
const Validation = require('../middlewares/validation');
const Controller = require('../controllers/Controller')

router.get('/', Controller.listado);
router.get('/prod', Controller.listado); 


module.exports = router;
