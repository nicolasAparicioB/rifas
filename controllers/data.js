const { response, request } = require("express");
const Data = require("../models/data");

const listData = async (req = request, res = response) => {
  try {
    const data = await Data.find();
    res.json({
      ok:true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      ok:false,
      msg: "Error consultando data.",
    });
  }
};


const updateData = async (req = request, res = response) => {

  try {
    const {id} = req.params;
    const body = req.body;
    await Data.findByIdAndUpdate(id, body);
    res.json({
      ok:true,
      msg: "Data actualizada.",
    });
  } catch (error) {
    return res.status(500).json({
      ok:false,
      msg: "Error al actualizar la data.",
    });
  }

};

module.exports = {
  listData,
  updateData
};
