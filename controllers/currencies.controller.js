const { data: CURRENCY_DATA } = require("../model/CURRENCY_DATA.json");
const INVALID_SYMBOL_ERROR_MSG = { message: "Invalid Symbol" };

const getCurrenciesByMinValue = (req, res) => {
  const data = CURRENCY_DATA.filter(
    (currency) =>
      parseFloat(currency.min_size) >= parseFloat(req.query.min_value)
  );
  res.json(data);
};

const getCurrencies = (req, res) => {
  if (req.query?.min_value) getCurrenciesByMinValue(req, res);
  else res.json(CURRENCY_DATA);
};

const getCurrencyBySymbol = (req, res) => {
  try {
    const data = CURRENCY_DATA.find(
      (currency) =>
        currency.id.toLowerCase() === req.params.symbol.toLowerCase()
    );
    if (!!data) res.json(data);
    else throw new Error("No currency exists");
  } catch (err) {
    res.status(404).json(INVALID_SYMBOL_ERROR_MSG);
  }
};

module.exports = {
  getCurrencies: getCurrencies,
  getCurrencyBySymbol: getCurrencyBySymbol,
};
