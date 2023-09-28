import passport from "passport";
import {Strategy} from 'passport-google-oauth20';
import debug from "debug";

import User from "../../models/userModel";
 
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env
const log = debug('app:googleStrategy');

function googleStrategy() {
  passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://prestige-autos.onrender.com/auth/google/signin"
  },
  function(accessToken, refreshToken, profile, cb) {
    log(profile);
    User.findOrCreate({ googleId: profile.id, username: profile.displayName }, function (err, user) {
      return cb(err, user);
    });
  }
));
}

export default googleStrategy;
