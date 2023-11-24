/**
 * @type {import("express-validator").Schema}
 */
const bodyTitle = {
  title: {
    isString: {
      errorMessage: "Title must be a string",
    },
  },
};

module.exports = bodyTitle;
