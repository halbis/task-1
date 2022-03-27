const logger = require("./utils/logger");
const db = require("./db");
const prompt = require("prompts");
const Petrolium_Products = require("./utils/reportGenerator");
// load data to database
require("./utils/loaddb")(db, logger);

(async () => {
  //new object of class
  const report = new Petrolium_Products();
  let option = 0;
  Menu: while (option < 5) {
    console.info(
      "All Pertoleum Records...\nPress 1 for Total Sale of Each Petroleum Product.\nPress 2 for Top 3 Countries By Highest Total Sale.\nPress 3 for Top 3 Countries By Lowest Total Sale.\nPress 4 for List of average sale of each petroleum product.\nPress any key to exit.\n"
    );
    const result = await prompt({
      type: "number",
      name: "value",
      message: "Press any number \n",
    });
    option = result.value;
    switch (option) {
      case 1:
        report.totalSaleOfEachProduct();
        continue Menu;
      case 2:
        report.topCountriesByHighSale();
        continue Menu;
      case 3:
        report.topCountriesByLowSale();
        continue Menu;
      case 4:
        report.listOfAvgSaleOfProducts();
        continue Menu;
      default:
        console.log("Please select valid number.");
        continue Menu;
    }
  }
})();
