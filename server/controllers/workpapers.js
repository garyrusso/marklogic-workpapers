var marklogic = require('marklogic');
var config = require('../config/config');

var db = marklogic.createDatabaseClient(config.mldb);
var qb = marklogic.queryBuilder;

exports.getWorkpapers = function(req, res) {
  
  db.documents.query(
    qb.where(
      qb.collection("workpapers")
    ).slice(1,30)
  )
  .result(function(documents) {
      console.log('workpaper count: ' + documents.length);
      res.send(documents.map(function(document) {
          console.log('\n URI: ' + document.uri);
          console.log('Title: ' + document.content.title);
          return document.content;
          })
      );
    })
  .catch(function(error) {
      console.log(error);
    });
};

exports.getWorkpaperById = function(req, res) {
  
  db.documents.query(
    qb.where(
      qb.where(qb.byExample({_id:req.params.id}))
    )
  )
 .result(function(documents) {
      console.log('\n 001 URI: ' + document.uri);
      console.log('Title: ' + document.content.title);
      res.send(documents.map(function(document) {
          console.log('\n URI: ' + document.uri);
          console.log('Title: ' + document.content.title);
          return document.content;
          })
      );
    })
  .catch(function(error) {
      console.log(error);
    });
};

