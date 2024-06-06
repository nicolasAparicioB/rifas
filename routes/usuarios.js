const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../helpers/validar-campos');
const {createUsuario,listUsuarios} = require('../controllers/usuarios');

const router = Router();

router.get('/',[
], listUsuarios);

router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('apellido','El apellido es obligatorio').not().isEmpty(),
    check('correo','El correo es obligatorio').not().isEmpty(),
    check('correo','El correo no es valido').isEmail(),
    check('telefono','El telefono es obligatorio').not().isEmpty(),
    check('ciudad','La ciudad es obligatoria').not().isEmpty(),
    validarCampos
], createUsuario );

module.exports = router;