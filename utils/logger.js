const winston = require("winston");
const path = require("path");

const filepath = path.join(__dirname, "../logs");

const logConfiguration = {
  transports: [
    new winston.transports.Console({
      level: "info",
      colorize: true,
      prettyPrint: true,
      timestamp: true,
    }),
    new winston.transports.File({
      level: "error",
      filename: `${filepath}/all-logs.log`,
      timestamp: true,
    }),
  ],
};

module.exports = winston.createLogger(logConfiguration);
