var marklogic = require('marklogic');
var my = require('./my-connection.js');

var db = marklogic.createDatabaseClient(my.connInfo);
var qb = marklogic.queryBuilder;

db.documents.query(
  qb.where(qb.byExample({username: 'grusso'}))
).result( function(documents) {
    console.log('Matches for username=grusso:')
    documents.forEach( function(document) {
      console.log('\nURI: ' + document.uri);
      console.log('Name: ' + document.content.firstName + ' ' + document.content.lastName);
      console.log('Roles: ' + document.content.roles);
    });
}, function(error) {
    console.log(JSON.stringify(error, null, 2));
});

