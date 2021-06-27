const FacebookStrategy = require("passport-facebook").Strategy;
const userCtrl = require("../controller/user.controller");
const authCtrl = require("../controller/auth.controller");
require("dotenv").config();

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.uid);
  });

  passport.deserializeUser((uid, done) => {
    authCtrl.findByUid(uid).then((user) => {
      done(null, user);
    });
  });

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.APP_ID,
        clientSecret: process.env.APP_SECRET,
        callbackURL: "/auth/facebook/cb",
        profileFields: ['id', 'displayName', 'photos', 'email']
      },
      (acesstoken, refreshtoken, profile, done) => {
        // passport callback function
        console.log(profile);
        try {
          userCtrl.find(profile).then((user) => {
            if (!user) {
              userCtrl.create(profile).then((newUser) => {
                console.log(newUser);
                done(null, newUser);
              });
            } else {
              console.log(user);
              done(null, user);
            }
          });
        } catch (err) {
          console.log(err);
        }
      }
    )
  );
};
