
// Remove the example documents from the database.
// This example removes all the documents in the directory
// /gs/. You can also remove documents by document URI.

var marklogic = require('marklogic');
var config = require('../server/config/config');
var db = marklogic.createDatabaseClient(config.mldb);

db.documents.removeAll(
  {directory: '/client/ey001/workpapers/'}
).result( function(response) {
  console.log(response);
});

