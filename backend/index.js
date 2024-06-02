const express = require("express");
const app = express();
const rootrouter = require("./routes/index");
const cors = require("cors");
const bodyParser = require('body-parser')


app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

app.use("/api/v1", rootrouter);

app.listen(3000, () => {
  console.log("server running");
});