let { body } = require('express-validator');

const validation = [ 

    body('name')
    .notEmpty().withMessage('Debes ingresar un nombre para el producto')
    .isLength({min:3}).withMessage('Debe contener al menos 3 caracteres.'),
    
    body('description')
    .notEmpty().withMessage('Debes ingresar una descripción para el producto'),

    body('brand_id')
    .isDecimal().withMessage('Debes seleccionar una Marca'),

    body('color_id')
    .isDecimal().withMessage('Debes seleccionar un Color'),
    
    body('material_id')
    .isDecimal().withMessage('Debes seleccionar un material'),

    body('price')
    .notEmpty().withMessage('Debes ingresar el precio')
    .isNumeric({ min: 0, max: 99999 }).withMessage('Ingrese un valor entre 0 y 99999')

]

module.exports = validation;