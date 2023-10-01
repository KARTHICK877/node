const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");




const app = express();

const PORT=3000;
app.use(bodyParser.json()); // For parsing JSON bodies

const DB_URL="mongodb+srv://kmass8754:karthick877@karthicktask.bbjj1ye.mongodb.net/";
app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
  });