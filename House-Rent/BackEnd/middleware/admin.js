/// inside this page, we check our user is admin or not
//this middle aware function execute after , auth middle aware
//so we already have the req.user -from auth middle ware
module.exports = function(req, res, next){

  //401-unauthorized
  //403-forbidden

  if (!req.user.isAdmin) return res.status(403).send('Access denied');
  next();

};