const express  =require("express");

router = require("./routes/auth-routes");

const passportSetup = require("./config/passport-setup");

const mongoose = require("mongoose");

const keys = require("./config/keys");
const app = express();

// set up view engine

app.set("view engine","ejs");

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI,function(){
  console.log("connected to mongodb");
});

// set up routes

app.use("/auth",router);


app.get('/',function(req,res){
  res.render("home");
});



app.listen(3000,function(){
  console.log("Listening to port 3000");
});
