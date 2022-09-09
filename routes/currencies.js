const express = require("express");
const routes = express.Router();

const {
  getCurrencies,
  getCurrencyBySymbol,
} = require("../controllers/currencies.controller");

routes.get("/", getCurrencies);
routes.get("/:symbol", getCurrencyBySymbol);

module.exports = routes;
