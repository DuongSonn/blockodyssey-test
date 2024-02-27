const express = require("express");
const userServices = require("../../service/user.service");
const { createUserValidation } = require("./users.dto");
const router = express.Router();

const userControllers = (db) => {
  const service = userServices(db);

  router.get("/users", service.getAllUsers);
  router.get("/users/:id", service.getUserById);
  router.post("/users", createUserValidation, service.addUser);
  router.put("/users/:id", service.updateUserById);
  router.delete("/users/:id", service.deleteUserById);
};

module.exports = userControllers;
