var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  mldb: {
    database: "meanstack",
    //host: "org-ml-dev.amers1.cis.trcloud",
    host: "ec2-52-5-203-68.compute-1.amazonaws.com",
    port: 8000,
    user: "grusso",
    password: "password",
    authType: "DIGEST"
  },
  development: {
    db: 'mongodb://localhost/workpapers',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production1: {
    db: 'mongodb://grusso:workpapers@ds043170.mongolab.com:43170/workpapers',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}

