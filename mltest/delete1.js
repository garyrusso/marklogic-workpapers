
// Remove the example documents from the database.
// This example removes all the documents in the directory
// /gs/. You can also remove documents by document URI.

var marklogic = require('marklogic');
var my = require('./my-connection.js');

var db = marklogic.createDatabaseClient(my.connInfo);

db.documents.removeAll(
  {directory: '/gs/'}
).result( function(response) {
  console.log(response);
});

