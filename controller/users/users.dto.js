const { body } = require("express-validator");

// Validation rules for creating a user
const createUserValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string"),
];

module.exports = {
  createUserValidation,
};
