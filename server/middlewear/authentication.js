const { verifyToken } = require('../utils/authToken');
const User = require('../models/user');

const getAuthTokenFromRequest = (req) => {
  const header = req.get('Authorization') || '';
  const [bearer, token] = header.split(' ');
  return bearer === 'Bearer' && token ? token : null;
};

module.exports = async (req, _res, next) => {
  const token = getAuthTokenFromRequest(req);
  console.log('this is the token');
  console.log(token);
  if (!token) {
    throw new Error('Authentication token not found.');
  }
  const userId = verifyToken(token).userId;
  console.log('this is the user id');
  console.log(userId);
  if (!userId) {
    throw new Error('Authentication token is invalid.');
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('Authentication token is invalid: User not found.');
  }
  req.currentUser = user;
  next();
};
