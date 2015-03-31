// Load documents into the database.

var marklogic = require('marklogic');
var config = require('../server/config/config');
var db = marklogic.createDatabaseClient(config.mldb);

// Document descriptors to pass to write(). 
var documents = [
  { uri: '/client/ey001/workpapers/janedoe0041/user0001.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Home Depot Q1 2014 Earnings',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 41',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('1/5/2015'),
        tags: ['Earnings', '2014']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0042/user0002.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Coca Cola Q3 2014 Earnings',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 42',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('2/5/2015'),
        tags: ['Earnings', '2014']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0043/user0001.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Apple Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('3/5/2015'),
        tags: ['Annual Tax', '2014', 'AAPL']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0043/user0002.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Microsoft Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('4/5/2015'),
        tags: ['Annual Tax', '2014', 'MSFT']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0044/user0001.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Land Rover Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 44',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('5/5/2015'),
        tags: ['Annual Tax', '2014', 'JLR']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0043/user0003.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Land Rover Corp Q3 2012 Earnings Report',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('6/5/2015'),
        tags: ['Earnings', '2012', 'JLR']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0043/user0004.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Land Rover Corp Q4 2012 Earnings Report',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('7/5/2015'),
        tags: ['Earnings', '2012', 'Q4', 'JLR']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0043/user0005.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Land Rover Corp Q4 2012 Earnings Report',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('7/5/2015'),
        tags: ['Earnings', '2012', 'Q4', 'JLR']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0043/user0006.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: News Corp Q4 2014 Earnings',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('8/5/2015'),
        tags: ['Earnings', '2014', 'FOXA']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0042/user0001.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: News Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 42',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('9/10/2014'),
        tags: ['Annual Tax', '2014', 'FOXA']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0041/user0002.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Amazon Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 41',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('10/10/2014'),
        tags: ['Annual Tax', '2014', 'AMZN']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0043/user0007.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Google Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('11/10/2014'),
        tags: ['Annual Tax', '2014', 'GOOGL']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0042/user0003.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: City of New York 2014 Annual Finance Report',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 42',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('12/10/2014'),
        tags: ['Annual Report', '2014', 'NYC']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0041/user0003.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'EY: Scary Circus Clown Corp Q1 FY2012 Earnings',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 41',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('5/15/2014'),
        tags: ['Earnings', 'Q1', '2012']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0041/user0004.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'PWC: Dell Corp Q1 FY2012 Earnings',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 41',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('5/15/2014'),
        tags: ['Earnings', 'Q1', '2012', 'DELL']
    }
  },
  { uri: '/client/ey001/workpapers/janedoe0041/user0005.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        title:'PWC: Dell Corp Annual Report FY2014',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 41',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/workpapers/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('5/15/2014'),
        tags: ['Annual Report', '2014', 'DELL']
    }
  }
];
/*
var perms = [xdmp.permission("qconsole-user", "read"),
             xdmp.permission("qconsole-user", "update")];
*/

// Load the example documents into the database
db.documents.write(documents).result( 
  function(response) {
    console.log('Loaded the following documents:');
    response.documents.forEach( function(document) {
      console.log('  ' + document.uri);
    });
  }, 
  function(error) {
    console.log(JSON.stringify(error, null, 2));
  }
);
