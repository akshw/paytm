const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
});

const User = mongoose.model("User", userSchema);

const bankSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", bankSchema);

module.exports = {
  User,
  Account,
};
