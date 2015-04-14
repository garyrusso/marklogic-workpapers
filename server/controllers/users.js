var marklogic = require('marklogic'),
    config = require('../config/config'),
    encrypt = require('../utilities/encryption');

var db = marklogic.createDatabaseClient(config.mldb);
var qb = marklogic.queryBuilder;

exports.getUsers = function(req, res) {
  
  db.documents.query(
    qb.where(
      qb.collection("users")
    ).slice(1,30)
  )
  .result(function(documents) {
      console.log('user count: ' + documents.length);
      res.send(documents.map(function(document) {
          console.log('\n URI: ' + document.uri);
          console.log('Name: ' + document.content.firstName + ' ' + document.content.lastName);
          return document.content;
          })
      );
    })
  .catch(function(error) {
      console.log(error);
    });
};

exports.getUserByUsername = function(req, res) {

  console.log("GR001a ------- req.params.username: " + req.params.username);

  db.documents.query(
    qb.where(
      qb.byExample({username:req.params.username})
    )
  )
 .result(function(documents) {
      res.send(documents.map(function(document) {
          console.log('\n URI: ' + document.uri);
          console.log('Name: ' + document.content.firstName + ' ' + document.content.lastName);
          return document.content;
          })
      );
    })
  .catch(function(error) {
      console.log(error);
    });

};

exports.createUser = function(req, res, next) {
  var userData = req.body;
  userData.username = userData.username.toLowerCase();
  userData.salt = encrypt.createSalt();
  userData.hashed_pwd = encrypt.hashPwd(userData.salt, userData.password);

  db.documents.write(userData).result(
    function(resp) {
      console.log('Created the following document:');
      resp.documents.forEach( function(document) {
        console.log('  ' + document.uri);
      });
      
      req.logIn(user, function(err) {
        if(err) {return next(err);}
        res.send(user);
      });
    }, 
    function(error) {
      console.log(JSON.stringify(error, null, 2));
  });
  
  /*
  User.create(userData, function(err, user) {
    if(err) {
      if(err.toString().indexOf('E11000') > -1) {
        err = new Error('Duplicate Username');
      }
      res.status(400);
      return res.send({reason:err.toString()});
    }
    req.logIn(user, function(err) {
      if(err) {return next(err);}
      res.send(user);
    });
  });
   */
};

exports.updateUser = function(req, res) {
  var userUpdates = req.body;
  
  if(req.user._id != userUpdates._id && !req.user.hasRole('admin')) {
    res.status(403);
    return res.end();
  }
  
  req.user.firstName = userUpdates.firstName;
  req.user.lastName = userUpdates.lastName;
  req.user.username = userUpdates.username;
  if(userUpdates.password && userUpdates.password.length > 0) {
    req.user.salt = encrypt.createSalt();
    req.user.hashed_pwd = encrypt.hashPwd(req.user.salt, userUpdates.password);
  }
  req.user.save(function(err) {
    if(err) { res.status(400); return res.send({reason:err.toString()}) };
    res.send(req.user);
  });
};

