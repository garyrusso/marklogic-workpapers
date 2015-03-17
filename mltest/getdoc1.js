// Read documents from the database by URI.

var marklogic = require('marklogic');
var my = require('./my-connection.js');

var db = marklogic.createDatabaseClient(my.connInfo);

db.documents.read(
  '/gs/cobra.json'
).result( function(documents) {
  documents.forEach( function(document) {
    console.log(JSON.stringify(document, null, 2) + '\n');
  });
}, function(error) {
    console.log(JSON.stringify(error, null, 2));
});

