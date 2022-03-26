const db = require("../db");
const logger = require("./logger");

class Petrolium_Products {
  totalSaleOfEachProduct = () => {
    const tsql = `SELECT petroleum_product AS product , SUM(sale) AS total FROM records GROUP BY petroleum_product`;
    db.all(tsql, (err, rows) => {
      if (err) {
        logger.error(err.message, err.stack);
        return;
      }
      console.log("Total Sale Of Each Petroleum..");
      console.table(rows);
    });
  };

  topCountriesByHighSale = () => {
    const hlsql = `SELECT country,SUM(sale) as Total FROM records GROUP BY country ORDER BY Total DESC LIMIT 3`;
    db.all(hlsql, (err, rows) => {
      if (err) {
        logger.error(err.message, err.stack);
        return;
      }
      console.log("Top 3 countries having highest total sale to date..");
      console.table(rows);
    });
  };

  topCountriesByLowSale = () => {
    const lsql = `SELECT country,SUM(sale) As Total FROM records GROUP BY country ORDER BY Total ASC LIMIT 3`;
    db.all(lsql, (err, rows) => {
      if (err) {
        logger.error(err.message, err.stack);
        return;
      }
      console.log("Top 3 countries having lowest total sale to date...");
      console.table(rows);
    });
  };

  listOfAvgSaleOfProducts = () => {
    const sql =
      "SELECT petroleum_product As product, MIN(year)||'-'||MAX(year) AS Year, avg(sale) AS Avg FROM records WHERE sale>0 GROUP BY product,ROUND(Year/5)";
    db.all(sql, (err, rows) => {
      if (err) {
        logger.error(err.message, err.stack);
        return;
      }
      console.log(
        "The list of average sales of each petroleum product for 4 yr of interval"
      );
      console.table(rows);
    });
  };
}

module.exports = Petrolium_Products;
