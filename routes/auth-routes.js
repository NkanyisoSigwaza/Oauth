const router = require("express").Router();

// auth login

router.get("/login",function(req,res){
  res.render("login");
});

// auth logout
router.get("/logout",function(req,res){
  // handle with passport
  res.send("logging out");
})

// auth with google
router.get("/google",function(req,res){
  // handle with passport
  res.send("logging in with google");
})

module.exports = router;
