const { validationResult } = require('express-validator');
const { check } = require('express-validator');

exports.validate = (method) => {
  switch (method) {
    case 'createUser': {
      return [
        check('userName')
          .notEmpty()
          .isString()
          .withMessage(
            'The name should contain only letters and should be unique.'
          ),
        check('email').notEmpty().isEmail().isString(),
        check('age').optional().isInt(),
      ];
    }
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { userName, email, phone, status } = req.body;

    const user = await User.create({
      userName,

      email,

      phone,

      status,
    });

    res.json(user);
  } catch (err) {
    return next(err);
  }
};
