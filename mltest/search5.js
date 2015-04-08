var marklogic = require('marklogic');
var config = require('../server/config/config');

var db = marklogic.createDatabaseClient(config.mldb);
var qb = marklogic.queryBuilder;

var collection = [];

db.documents.query(
  qb.where(
    qb.collection("workpapers")
  ).slice(1,30)
  )
.result(function(documents) {
    console.log('workpaper count: ' + documents.length);
    //collection.push(document.content);
    documents.map(function(document) {
        console.log('\n URI: ' + document.uri);
        console.log('Title: ' + document.content.title);
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

        