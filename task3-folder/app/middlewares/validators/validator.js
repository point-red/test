const validator = require("validator");

class UserValidator {
  async create(req, res, next) {
    try {
      // Create errors variable
      let errors = [];

      //Set form validation rule
      if (!validator.isAlpha(validator.blacklist(req.body.name, ' '))) {
        errors.push("Name must be alphabet");
      }
      if (!validator.isEmail(req.body.email)) {
        errors.push("Email is invalid");
      }
      if (!validator.isNumeric(req.body.age)) {
        errors.push("Age must be number");
      }

      // If errors length > 0, it will make errors message
      if (errors.length > 0) {
        // Because bad request
        return res.status(422).json({
          message: errors.join(", "),
        });
      }
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    }
  }

  async update(req, res, next) {
    try {
      // Create errors variable
      let errors = [];

      //Set form validation rule
      if (!validator.isAlpha(validator.blacklist(req.body.name, ' '))) {
        errors.push("Name must be alphabet");
      }
      if (!validator.isEmail(req.body.email)) {
        errors.push("Email is invalid");
      }
      if (!validator.isNumeric(req.body.age)) {
        errors.push("Age must be number");
      }

      // If errors length > 0, it will make errors message
      if (errors.length > 0) {
        // Because bad request
        return res.status(422).json({
          message: errors.join(", "),
        });
      }
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    }
  }
}

module.exports = new UserValidator();
