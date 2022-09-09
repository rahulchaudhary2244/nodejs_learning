const USER_DATA = require("../model/USER_DATA.json").data;
const { getQueryErrors } = require("../validators/users.validators");

const getAllUsers = (req, res) => {
  res.json({ data: USER_DATA });
};

const getUsersByUuid = (req, res) => {
  const data = USER_DATA.find((user) => user.login.uuid === req.params.uuid);
  res.json({ data: data });
};

const getUsersByAppliedFilters = (req, res) => {
  try {
    const { gender, age } = req.query;

    // no need of validation here as we are already using it as middleware,
    // validation added here will work fine but it is not needed anymore here
    // const error = getQueryErrors({ age, gender });
    // if (error) throw new Error("Validation failed");

    let responseData = !!gender
      ? USER_DATA.filter((user) => user.gender === gender.toLowerCase())
      : USER_DATA;
    responseData = !!age
      ? responseData.filter((user) => user.dob.age === Number(age))
      : responseData;

    res.json({ data: responseData });
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers: getAllUsers,
  getUsersByUuid: getUsersByUuid,
  getUsersByAppliedFilters: getUsersByAppliedFilters,
};
