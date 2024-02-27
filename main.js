// app.js

const express = require("express");
const { getConfigs } = require("./config/config");
const { userControllers } = require("./controller");
const loggerMiddleware = require("./middleware/logger.middleware");
const app = express();

app.use(bodyParser.json());

//
const configs = getConfigs();
const db = connectToDatabase(configs.DATABASE_URL);

//
app.use(loggerMiddleware);

// Use the consolidated routes
app.use("/", userControllers(db));

// Start the server
app.listen(configs.PORT, () => {
  console.log(`Server is listening at http://localhost:${configs.PORT}`);
});
