import passport from 'passport';
import { Router } from 'express';
import debug from 'debug';
const log = debug('app:googleRoutes')


function googleRoutes()  {
  const googleRouter = Router();

 googleRouter.route('/google')
 .get(passport.authenticate('google', { scope: ['profile'] }));

 googleRouter.route('/google/signin')
 .get(passport.authenticate('google', { failureRedirect: '/' }),
function(req, res) {
  log(req.user);
  res.redirect('/pages/auth/user')
})
return googleRouter

}

export default googleRoutes;



