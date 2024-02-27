const sqlite3 = require("sqlite3");

const connectToDatabase = (databaseName) => {
  const db = new sqlite3.Database(databaseName);

  db.serialize(() => {
    db.run(
      "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)"
    );
  });

  return db;
};

module.exports = {
  connectToDatabase,
};
