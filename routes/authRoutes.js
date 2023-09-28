import {Router} from 'express';
import debug from 'debug';
import passport from 'passport';
import cors from 'cors'

import validateUser from '../validators/userValidator';
import userController from '../controllers/userController';

const log = debug('app:authRoutes');

function authRoutes() {
  const authRouter = Router();
  const {signup, signin} = userController;
 

  authRouter.route('/signup')
  .post(validateUser,  passport.authenticate('signup', {failureRedirect: '/pages/auth/signup'}), signup)

  authRouter.route('/signin')
  .post(passport.authenticate('signin', {failureRedirect: '/'}), signin)
  authRouter.route('/logout')
  .get((req, res) => {
    req.logOut(err => {
      if (err) {
        log(err)
      } else {
        return res.json(null);
      }
    })
  })

  return authRouter;
}

export default authRoutes;
