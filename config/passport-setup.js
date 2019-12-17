const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");

const User = require("../models/user-model")
passport.use(new GoogleStrategy({
  // options for the google strat
  callbackURL:"/auth/google/redirect",
  clientID:keys.google.clientID,
  clientSecret:keys.google.clientSecret
},
function(accessToken,refreshToken,profile,done){
  //accessToken retrieved from google to alter users profile
  //refreshToken refreshes accessToken expires after timeout


  //passport call back function

  console.log("passport callback function fired");

  // check if user already exists in db
  User.findOne({googleID:profile.id}).then(function(currentUser){
    if (currentUser){
      // already have a user
      console.log("User is"+currentUser);
    }
    else{
      // if not create user in db
      new User({
        username:profile.displayName,
        googleID:profile.id
      }).save().then(function(newUser){
        console.log("new user creater:"+ newUser);
      });
    }
  });

}
));
