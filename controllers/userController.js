import passport from 'passport';



export default (function userController(){
  return {
    signup: (req, res) => {
      const {username, email, role, address, mobile} = req.user;
      const user = {username, email, role, address, mobile}
      res.status(201).json(user);
    },
    signin: (req, res) => {
      const {username, email, role, address, mobile} = req.user;
      const user = {username, email, role, address, mobile}
      res.status(200).json(user);
    }
  }
}())