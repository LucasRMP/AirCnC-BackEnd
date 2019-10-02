const express = require("express");
const routes  = require("./routes");
const mongoose= require("mongoose");

const app = express();

mongoose.connect('mongodb+srv://lucas:lucas@aircnc-9serh.mongodb.net/AirCnC?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => { console.log("Connected to DB") });

app.use(express.json());
app.use(routes);

app.listen(8000);