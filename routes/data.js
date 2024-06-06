const {Router} = require('express');
const { listData, updateData} = require('../controllers/data');
const { check } = require('express-validator');
const { validarCampos } = require('../helpers/validar-campos');

const router = Router();

router.get('/', listData);

router.put('/:id',[
    check('id','No es un id valido').isMongoId(),
    validarCampos
],updateData)


module.exports = router;