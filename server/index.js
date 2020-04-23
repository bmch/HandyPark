const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const parkingRoutes = require('./routes/parking');
const authRoutes = require('./routes/auth');
const privateRoutes = require('./routes/user');

// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [process.env.SESSION],
//   })
// );
app.use(passport.initialize());
//app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:8080', // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //credentials: true, // allow session cookie from browser to pass through
  })
);

app.use(express.json());

app.use('/parking', parkingRoutes);
app.use('/auth', authRoutes);
app.use('/user', privateRoutes);

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(` ✅ 🚀 Server is listening on port ${PORT}`); // eslint-disable-line no-console
});
