/**
 * @type {import("express-validator").Schema}
 */
const paramID = {
  id: {
    in: ["params"],
    isInt: {
      errorMessage: "ID must be an integer number",
    },
  },
};

module.exports = paramID;
