const express  =require("express");

const app = express();

// set up view engine

app.set("view engine","ejs");

app.get('/',function(req,res){
  res.render("home");
});

app.listen(3000,function(){
  console.log("Listening to port 3000");
});
