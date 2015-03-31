var marklogic = require('marklogic');
var config = require('../server/config/config');
var db = marklogic.createDatabaseClient(config.mldb);

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

