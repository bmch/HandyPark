const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

const parkingRoutes = require('./routes/parking');
const authRoutes = require('./routes/auth');

app.use('/parking', parkingRoutes);
app.use('/auth', authRoutes);

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(` ✅ 🚀 Server is listening on port ${PORT}`); // eslint-disable-line no-console
});
