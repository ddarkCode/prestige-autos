import passport from "passport";
import {Strategy} from 'passport-local';
import debug from "debug";
import {hash, compare} from 'bcrypt';

import User from "../../models/userModel";

const log = debug('app:localStrategy');


function localStrategy() {
  passport.use('signup', new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      const {role, mobile, address, username} = req.body;
    try {
      const userExist = await User.findOne({email});

      if (userExist) {
        log('Passport-Local: User already Exists: ',userExist);
        return done(null, false, {message: 'User With This Email Already Exists'});
      }
      const hashedPassword = await hash(password, +process.env.SALT_ROUND);
      const newUser = new User({
        email, 
        password: hashedPassword,
        mobile,
         role,
          address,
           username
      })

      const savedUser = await newUser.save();
      return done(null, savedUser, {message: 'Registration Was Successfull'});
      
    } catch (err) {
      log(err);
      return done(err, false, {message: 'An Error Occurred While Registering.'})
    }
    }
  ));

  passport.use('signin', new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({email});

        if (!user) {
          return done(null, false, {message: 'Incorrect Email Entered, Please verify Your Email and Try Again'});
        }

        const isValidPassword = await user.verifyPassword(password, user.password)
        if (!isValidPassword) {
          return done(null, false, {message: 'Incorrect Password Entered, Please Check Your Password And Try Again.'})
        }

        return done(null, user, {message: 'Successfully Logged Into Your Account.'});
      } catch (err) {
        log('Passport-local: Signin Error: ', err);
        return done(err, false, {message: 'An Error Occurred While Signing In.'});
      }
    }
  ))
}

export default localStrategy;