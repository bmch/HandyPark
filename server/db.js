const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
db.once('open', function () {
  console.log('✅ 🚀 Server is connected to mongodb'); // eslint-disable-line no-console
});

module.exports = mongoose;