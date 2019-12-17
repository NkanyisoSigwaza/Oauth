const router = require("express").Router();
const passport = require("passport");

// auth login

router.get("/google",passport.authenticate("google",{
  scope:["profile"]  // what info we want to retrieve
}));

router.get("/login",function(req,res){
  // handle with passport
  res.render("login");
});
// auth logout
router.get("/logout",function(req,res){
  // handle with passport
  res.send("logging out");
});

// auth with google
router.get("/google",function(req,res){
  // handle with passport
  res.send("logging in with google");
});

// callback route for google to redirect:

router.get("/google/redirect",passport.authenticate("google"),function(req,res){
  res.send("you reached a call back url");  //authenticate exchanges code for profile info and then fires passport callback fuction
});

module.exports = router;
