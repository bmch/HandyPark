const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.');
      console.log(errors);
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    const { email, password, firstName, lastName } = req.body;
    const hashedPw = await bcrypt.hash(password, 12);
    const newUser = new User({
      email,
      password: hashedPw,
      firstName,
      lastName
    });
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User created!', userId: savedUser._id });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  let loadedUser;
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error('Could not find your account.');
    error.statusCode = 401;
    throw error;
  }
  loadedUser = user;
  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    const error = new Error(
      'Wrong password. Try again or click Forgot password to reset it'
    );
    error.statusCode = 401;
    throw error;
  }
  const token = jwt.sign(
    {
      email: loadedUser.email,
      userId: loadedUser._id.toString()
    },
    process.env.JWT_SECRET,
    { expiresIn: '180 days' }
  );
  res.status(200).json({ token: token, userId: loadedUser._id.toString() });
};
