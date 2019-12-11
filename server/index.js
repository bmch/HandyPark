const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const router = require('./router.js');

app.use(router);

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(` ✅ 🚀 Server is listening on port ${PORT}`); // eslint-disable-line no-console
});