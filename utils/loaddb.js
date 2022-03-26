const fs = require("fs");

module.exports = (db, logger) => {
  fs.readFile("./data.json", "utf-8", function (err, data) {
    if (err) {
      logger.error(err.message, err.stack);
      return;
    }
    const result = JSON.parse(data);
    //create table
    const sql = "CREATE TABLE records(year,petroleum_product,sale,country)";
    db.run(sql, function (err, rows) {
      if (err) {
        logger.error(err.message, err.stack);
        return;
      }
      logger.info("records table created..");
      //only insert if table doesnot exists...
      result.forEach((record) => {
        const query = `INSERT INTO records(year,petroleum_product,sale,country) VALUES(?,?,?,?)`;
        db.run(
          query,
          [record.year, record.petroleum_product, record.sale, record.country],
          function (err) {
            if (err) {
              logger.error(err.message, err.stack);
              return;
            }
            logger.info("Data insertion complete....");
          }
        );
      });
    });
  });
};
