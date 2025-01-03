require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
const DATABASE_URL = process.env.DATABASE_URL;

module.exports = {
  JWT_SECRET,
  DATABASE_URL,
};
