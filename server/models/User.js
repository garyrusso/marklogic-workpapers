var marklogic = require('marklogic'),
    encrypt = require('../utilities/encryption'),
    config = require('../config/config');

var db = marklogic.createDatabaseClient(config.mldb);
var qb = marklogic.queryBuilder;

var userSchema = {
  firstName: 'Grace',
  lastName:  'Hopper',
  username: 'ghopper',
  salt: '',
  hashed_pwd: '',
  roles: ['admin']
};

userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function(role) {
    return this.roles.indexOf(role) > -1;
  }
};

function createDefaultUsers() {

  db.documents.query(
    qb.where(
      qb.collection("users")
    ).slice(1,30)
  )
  .result(function(documents) {
      console.log('user count: ' + documents.length);
      
      documents.map(function(document) {
          console.log('\n URI: ' + document.uri);
          console.log('Name: ' + document.content.firstName + ' ' + document.content.lastName);
      });

      if(documents.length === 0)
        loadUsers();
      else
        console.log("\nNo Docs Loaded... " + documents.length);
    })
  .catch(function(error) {
      console.log(error);
    });
/*
  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var salt, hash;

      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'grusso');
      User.create({firstName:'Gary',lastName:'Russo',username:'grusso', salt: salt, hashed_pwd: hash, roles: ['admin']});

      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'janedoe');
      User.create({firstName:'Jane',lastName:'Doe',username:'janedoe', salt: salt, hashed_pwd: hash, roles: []});

      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'ghopper');
      User.create({firstName:'Grace',lastName:'Hopper',username:'ghopper', salt: salt, hashed_pwd: hash});
    }
  })
*/  
};

// Document descriptors to pass to write(). 
var users = [
  { uri: '/client/ey001/users/ghopper.json',
    contentType: 'application/json',
    collections: ['users'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
      _id:'5774611348485240358',
      firstName: 'Grace',
      lastName: 'Hopper',
      username: 'ghopper',
      salt: 'C4EHbmE8IjVDrr+SPWBA48eiQ63dmvHiCWuDopI9YkwIQ55Vjg5cLxBzZfQvOfunmAyC3HyiuOeACYgOVt30wH7xdpJEm/SZ5pjLcZ8oEWrA/f5UDts4zAF6xxGNJCj++EEM84TvvoJ3iDzNk+h8/Cq53Am4M8uscc35Y1EabhI=',
      hashed_pwd: '841b100908e774698824f34f1ca9a403d74387fd',
      roles: []
    }
  },
  { uri: '/client/ey001/users/grusso.json',
    contentType: 'application/json',
    collections: ['users'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
      _id:'15523253341188008998',
      firstName: 'Gary',
      lastName: 'Russo',
      username: 'grusso',
      salt: 'tPQyodfIxmHlHvxnF4fCtBgnqqUbqc6uYyJfzCxYbxVIyURCunSrY05vlUefg+nSWsMaD6HdaoUs8pzeH6NS8rBH5V2ah0xBcuf0F+WFc+sHHMTaFhEf2Jp3Q3ETGf7jnRQzBzC2TNSb8fN/3pHEix+6yBJogik07MsVO6MK9ek=',
      hashed_pwd: 'c75e0c3fd53c40a30dff4be1fedb18a730e36bad',
      roles: ['admin']
    }
  },
  { uri: '/client/ey001/users/janedoe.json',
    contentType: 'application/json',
    collections: ['users'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
      _id:'12846669631052694503',
      firstName: 'Jane',
      lastName: 'Doe',
      username: 'janedoe',
      salt: 'ltc6A3EjNYZX3E79kTdxRlXEoFw8508ejS6UiCHlq3ahAy6VEeFIWTF8eLcDGLMdQGdgdsPkIwYvLG/0MOiCiJMUIEVM1h/ooGy815/KTRnFnGpv5B7x/Dt6wteByjIRtp7NbaYaYv295sVb6M5GidFSi6vkLh0CyxF0sNujvAo=',
      hashed_pwd: 'a1610ec512271c29419a9817ccc756ea5bab6026',
      roles: []
    }
  }
];

function loadUsers() {
  console.log('loading users...');

  db.documents.write(users).result(
    function(response) {
      console.log('Loaded the following documents:');
      response.documents.forEach( function(document) {
        console.log('  ' + document.uri);
      });
    }, 
    function(error) {
      console.log(JSON.stringify(error, null, 2));
  });
};

exports.getUserByUsername = function(req, res) {

  console.log('\ngetUserByUsername: ' + req.params.username);

  db.documents.query(
    qb.where(
      qb.byExample({username:req.params.username})
    )
  )
 .result(function(documents) {
      res.send(documents.map(function(document) {
          console.log('\nURI: ' + document.uri);
          console.log('Name: ' + document.content.firstName + ' ' + document.content.lastName);
          return document.content;
          })
      );
    })
  .catch(function(error) {
      console.log(error);
    });

};

exports.createDefaultUsers = createDefaultUsers;
