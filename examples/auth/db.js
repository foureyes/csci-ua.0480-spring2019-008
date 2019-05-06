const mongoose = require('mongoose');
const User = new mongoose.Schema({
  username: {required: true, type: String},
  password: {required: true, type: String}
  // salt will be stored as part of hash in password field
});
mongoose.model('User', User);
mongoose.connect('mongodb://localhost/class26', {useNewUrlParser: true});
