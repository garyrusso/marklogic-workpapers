module.exports = {
  connInfo1: {
    host: 'org-ml-dev.amers1.cis.trcloud',
    port: 8000,
    user: 'grusso',
    password: 'password'
  },
  connInfo: {
    database: "meanstack",                 // Each connection can specify its own database
    host: "org-ml-dev.amers1.cis.trcloud", // The host against which queries will be run
    port: 8000,            // By default port 8000 accepts Client API requests
    user: "grusso",        // A user with at least the rest-writer role
    password: "password",  // Probably not your password
    authType: "DIGEST"     // The default auth
  }
};

