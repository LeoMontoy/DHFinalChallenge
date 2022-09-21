const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");
const validation = require('../middlewares/validation');
const APIcontroller = require('../controllers/APIcontroller');

//Express Routes
router.get('/', productsController.list);
router.get('/create', productsController.create);
router.post('/create', validation, productsController.add);
router.get('/createimg', productsController.createimg);
router.post('/createimg', productsController.addimg);
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);
router.post('/edit/:id', productsController.update);
router.get('/delete/:id', productsController.delete);
router.delete('/delete/:id', productsController.destroy);

//API Routes

router.get('/products',APIcontroller.products);
router.get('/products/:id', APIcontroller.detalle);
router.get('/brand', APIcontroller.brand)
router.get('/lastProd',APIcontroller.lastProd)


module.exports = router;
