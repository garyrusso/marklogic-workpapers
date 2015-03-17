// Use the patch feature to update just a portion of a document,
// rather than replacing the entire contents.

var marklogic = require('marklogic');
var my = require('./my-connection.js');

var db = marklogic.createDatabaseClient(my.connInfo);
var pb = marklogic.patchBuilder;

db.documents.patch(
  '/gs/cobra.json',
  pb.replace('/kind', 'reptile')
).result( function(response) {
    console.log('Patched ' + response.uri);
}, function(error) {
    console.log(JSON.stringify(error, null, 2));
});


