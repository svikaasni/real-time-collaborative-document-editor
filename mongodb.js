const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/realtime-editor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongoose;