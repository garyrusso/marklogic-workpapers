var marklogic = require('marklogic'),
    userModel = require('../models/User'),
    workpaperModel = require('../models/Workpaper');

module.exports = function(config) {
  //marklogic.connect(config.db);
  //var db = marklogic.createDatabaseClient(config.db);

//  db.on('error', console.error.bind(console, 'connection error...'));
//  db.on("error", function(error) {
//    console.error(error)
//  });

//  db.once('open', function callback() {
//      console.log('workpapers db opened');
//  });

  userModel.createDefaultUsers();
  workpaperModel.createDefaultWorkpapers();

  console.log('workpapers db opened');
};
