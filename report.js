const logger = require("./utils/logger");
const db = require("./db");

const Petrolium_Products = require("./utils/reportGenerator");

(() => {
  // load data to database
  require("./utils/loaddb")(db, logger);
  //new object of class
  const report = new Petrolium_Products();
  report.totalSaleOfEachProduct();
  report.topCountriesByHighSale();
  report.topCountriesByLowSale();
  report.listOfAvgSaleOfProducts();
})();
