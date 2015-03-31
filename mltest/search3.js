var marklogic = require('marklogic');
var config = require('../server/config/config');
var db = marklogic.createDatabaseClient(config.mldb);

var qb = marklogic.queryBuilder;

var query = cts.andQuery([
  cts.collectionQuery("workpapers")
])

var results = cts.estimate(query);

results;
