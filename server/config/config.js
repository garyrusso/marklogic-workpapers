var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/workpapers',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://grusso:workpapers@ds060977.mongolab.com:60977/workpapers',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}

