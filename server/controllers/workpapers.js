var Course = require('mongoose').model('Workpaper');

exports.getWorkpapers = function(req, res) {
  Course.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};

exports.getWorkpaperById = function(req, res) {
  Course.findOne({_id:req.params.id}).exec(function(err, workpaper) {
    res.send(workpaper);
  })
};
