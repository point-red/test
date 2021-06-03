const db_connection = require("./db-connection").promise();
const { body, param, validationResult } = require("express-validator");

module.exports = {
  // User name and email Validation
  userInfo: [
    body("name", "Length of your name is too short!")
      .optional()
      .isLength({ min: 3 })
      .trim()
      .unescape()
      .escape(),

    body("email", "Please choose another email address!")
      .optional()
      .trim()
      .unescape()
      .escape()
      .isEmail()
      .custom(async (value) => {
        // Checking that the email already in use or NOT
        const [row] = await db_connection.execute(
          "SELECT `email` FROM `user` WHERE `email`=?",
          [value]
        );
        if (row.length > 0) {
          return Promise.reject("E-mail already is registered!");
        }
      }),
  ],

  // User ID Validation
  userID: [param("id", "User ID is not valid!").trim().isInt()],

  // Checking Validation Result
  result: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
};