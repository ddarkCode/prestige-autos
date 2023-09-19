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
    callbackURL: "http://localhost:4444/api/users/auth/google"
  },
  function(accessToken, refreshToken, profile, cb) {
    log(profile);
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));
}

export default googleStrategy;
