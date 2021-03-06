var marklogic = require('marklogic');
var config = require('../server/config/config');

var db = marklogic.createDatabaseClient(config.mldb);
var qb = marklogic.queryBuilder;

var collection = [];

db.documents.query(
  qb.where(
    qb.collection("users")
  ).slice(1,30)
)
.result(function(documents) {
    console.log('user count: ' + documents.length);
    //collection.push(document.content);
    documents.map(function(document) {
        console.log('\nURI:      ' + document.uri);
        console.log('Name:       ' + document.content.firstName + ' ' + document.content.lastName);
        console.log('firstName:  ' + document.content.firstName);
        console.log('lastName:   ' + document.content.lastName);
        console.log('username:   ' + document.content.username);
        console.log('salt:       ' + document.content.salt);
        console.log('hashed_pwd: ' + document.content.hashed_pwd);
        //console.log('roles:      ' + document.content.roles);
        collection.push(document.content);
    });
    /*
    res.send(documents.map(function(document) {
        console.log('\n URI: ' + document.uri);
        console.log('Title: ' + document.content.title);
        return document.content;
        });
    ); 
    */
  })
.catch(function(error) {
    console.log(error);
  });

        