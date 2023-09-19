import passport from 'passport';

import localStrategy from './strategies/localStrstegy';
import googleStrategy from './strategies/googleStrategy';


function passportConfig(app) {

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    return done(null, user);
  });

  passport.deserializeUser((user, done) => {
    return done(null, user);
  })

  localStrategy();
  googleStrategy();
}


export default passportConfig

