var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: {
      database: "meanstack",
      host: "org-ml-dev.amers1.cis.trcloud",
      port: 8000,
      user: "grusso",
      password: "password",
      authType: "DIGEST"
    },
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  development1: {
    db: 'mongodb://localhost/workpapers',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production1: {
    db: 'mongodb://grusso:workpapers@ds060977.mongolab.com:60977/workpapers',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}

