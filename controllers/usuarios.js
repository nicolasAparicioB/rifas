const { response, request } = require("express");
const Usuario = require("../models/usuario");

const listUsuarios = async (req = request, res = response) => {

  try {
    const usuarios = await Usuario.find();
    res.json({
      ok: true,
      usuarios,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error al consultar los usuarios.",
    });
  }

};
const createUsuario = async (req = request, res = response) => {
  

  try {

   // crear usuario con el modelo
    const dbUser = new Usuario(req.body);

    //Crear usuario de BD
    await dbUser.save();

    //Generar respuesta
    res.status(201).json({
      ok: true,
      msg: "Usuario creado.",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error al crear el usuario.",
    });
  }
};




module.exports = {
  createUsuario,
  listUsuarios,
};
