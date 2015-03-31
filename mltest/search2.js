var marklogic = require('marklogic');
var config = require('../server/config/config');

var db = marklogic.createDatabaseClient(config.mldb);
var qb = marklogic.queryBuilder;

var docCount = 0;

var docs =
  db.documents.query(
    qb.where(
      qb.collection("workpapers")
    ).slice(1,30)
  )
  .stream().
    on("data", function(document) {
      docCount++;
      console.log(document);
    }).
    on("error", function(error) {
      console.log(error)
    }).
    on("end", function() {
      console.log("done loading... " + docCount)
    })

