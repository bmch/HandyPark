const router = require('express').Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/user');
const authController = require('../controllers/auth');

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('E-Mail address already exists!');
          }
        });
      })
      .normalizeEmail(),
    check('password')
      .trim()
      .isLength({ min: 5 }),
    check('firstName')
      .trim()
      .not()
      .isEmpty(),
    check('lastName')
      .trim()
      .not()
      .isEmpty()
  ],
  authController.signup
);

module.exports = router;
