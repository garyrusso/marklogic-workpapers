var marklogic = require('marklogic');
var config = require('../config/config');

var db = marklogic.createDatabaseClient(config.mldb);
var qb = marklogic.queryBuilder;

exports.getWorkpapers = function(req, res) {
  
  var collection = [];
  
  db.documents.query(
    qb.where(
      qb.collection("workpapers")
    ).slice(1,30)
  )
  .stream().
    on("data", function(document) {
      console.log('\n URI: ' + document.uri);
      console.log('Title: ' + document.content.title);
      collection.push(document.content);
      console.log('workpaper count: ' + collection.length);
    }).
    on("error", function(error) {
      console.log(error);
    }).
    on("end", function() {
      console.log('end event.....workpapers collection size = ' + collection.length)
      res.send(collection);
    });
};

exports.getWorkpaperById = function(req, res) {
  var collection = [];
  
  db.documents.query(
    qb.where(
      qb.where(qb.byExample({_id:req.params.id}))
    )
  )
  .stream().
    on("data", function(document) {
      console.log('\n URI: ' + document.uri);
      console.log('Title: ' + document.content.title);
      collection.push(document.content);
      console.log('workpaper count: ' + collection.length);
    }).
    on("error", function(error) {
      console.log(error);
    }).
    on("end", function() {
      console.log('end event.....workpapers collection size = ' + collection.length)
      res.send(collection);
    });
};
