const { response } = require("express");

const getUsers = (req = request, res = response) => {
  //const { nombre = 'Sin nombre', apellido } = req.query;
  const { query } = req;

  res.json({
    msg: "TODOS",
    query,
  });
};

const getUser = (req, res = response) => {
  res.json({
    msg: "UNO",
  });
};

const createUser = (req, res = response) => {
  //const { nombre, apellido } = req;
  const { body } = req;

  res.json({
    msg: "CREAR",
    body,
  });
};

const updateUser = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "ACTUALIZAR",
    id,
  });
};

const deleteUser = (req, res = response) => {
  res.json({
    msg: "ELIMINAR",
  });
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
