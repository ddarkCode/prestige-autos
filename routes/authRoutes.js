import {Router} from 'express';
import debug from 'debug';
import passport from 'passport';

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

  authRouter.route('/auth/google')
  .get(passport.authenticate('google', { scope: ['profile'] }));

authRouter.route('/auth/google/signin')
  .get(passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  })

  return authRouter;
}

export default authRoutes;
