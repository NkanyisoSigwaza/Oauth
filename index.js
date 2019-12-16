const express  =require("express");

router = require("./routes/auth-routes");

const app = express();

// set up view engine

app.set("view engine","ejs");
// set up routes

app.use("/auth",router);


app.get('/',function(req,res){
  res.render("home");
});



app.listen(3000,function(){
  console.log("Listening to port 3000");
});
