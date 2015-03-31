// Read documents from the database by URI.

var marklogic = require('marklogic');
var config = require('../server/config/config');
var db = marklogic.createDatabaseClient(config.mldb);

db.documents.read(
  '/gs/cobra.json'
).result( function(documents) {
  documents.forEach( function(document) {
    console.log(JSON.stringify(document, null, 2) + '\n');
  });
}, function(error) {
    console.log(JSON.stringify(error, null, 2));
});

