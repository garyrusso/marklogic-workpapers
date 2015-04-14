var passport      = require('passport'),
    marklogic     = require('marklogic'),
    users         = require('../controllers/users'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      
      console.log("GR001 ------- username: " + username);
      
      users.getUserByUsername({username:username}).exec(function(err, user) {

        console.log("GR002 ------- user: " + user);
        
        if(user && user.authenticate(password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    if (user) {
      done(null, user._id);
    }
  });

  passport.deserializeUser(function(id, done) {
//    User.findOne({_id:id}).exec(function(err, user) {
//      if (user) {
//        return done(null, user);
//      } else {
//        return done(null, false);
//      }
//    })
  });
}