let { validationResult } = require('express-validator');

const Controller = {

    index: (req, res) => {

        res.render('index')

    },
    listado: (req,res)=>{
        res.render('listado')
    }


    }

module.exports = Controller