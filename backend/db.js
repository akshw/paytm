require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;

const mongoose = require("mongoose");
mongoose.connect(DATABASE_URL);

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
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
