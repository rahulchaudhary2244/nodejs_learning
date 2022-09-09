const express = require("express");
const routes = express.Router();

const {
  getAllUsers,
  getUsersByUuid,
  getUsersByAppliedFilters,
} = require("../controllers/users.controller");

const {
  validateSearchQuery
} = require('../middlewares/validators/validateSearchQuery')

routes.get("/", getAllUsers);
routes.get("/search", validateSearchQuery , getUsersByAppliedFilters);
routes.get("/:uuid", getUsersByUuid);

module.exports = routes;
