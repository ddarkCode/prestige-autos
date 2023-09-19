import {Router} from 'express';
import debug from 'debug';
import passport from 'passport';

import validateUser from '../validators/userValidator'

const log = debug('app:authRoutes');

function authRoutes() {
  const authRouter = Router();


  authRouter.route('/signup')
  .post(validateUser,  passport.authenticate('signup', {failureRedirect: '/'}), (req, res) => {
    const {username, email, role, address, mobile} = req.user;
    const user = {username, email, role, address, mobile}
    res.status(201).json(user);
  })

  authRouter.route('/signin')
  .post(passport.authenticate('signin', {failureRedirect: '/'}), (req, res) => {
    const {username, email, role, address, mobile} = req.user;
    const user = {username, email, role, address, mobile}
    res.status(200).json(user);
  })

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
