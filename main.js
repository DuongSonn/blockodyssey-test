// app.js

const express = require("express");
const { getConfigs } = require("./config/config");
const loggerMiddleware = require("./middleware/logger.middleware");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./pkg/database/sqlite");

const app = express();

app.use(bodyParser.json());

//
const configs = getConfigs();
const db = connectToDatabase(configs.DATABASE_URL);

//
app.use(loggerMiddleware);

//
const userControllers = require("./controller/users/users.controller");
app.use("/", userControllers(db));

// Start the server
app.listen(configs.PORT, () => {
  console.log(`Server is listening at http://localhost:${configs.PORT}`);
});
