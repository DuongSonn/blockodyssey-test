const dotenv = require("dotenv");

dotenv.config();

const getConfigs = () => {
  return process.env;
};

module.exports = {
  getConfigs,
};
