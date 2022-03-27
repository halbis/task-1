const sqlite3 = require("sqlite3").verbose();
const logger = require("./utils/logger");

const db = new sqlite3.Database(
  "./db/test.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      logger.error(err.message, err.stack);
      return;
    }
    console.info("database connected..");
  }
);

module.exports = db;
