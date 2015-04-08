var marklogic = require('marklogic');
var config = require('../config/config');

var db = marklogic.createDatabaseClient(config.mldb);
var qb = marklogic.queryBuilder;

function createDefaultWorkpapers() { // constructor function

  db.documents.query(
    qb.where(
      qb.collection("workpapers")
    ).slice(1,30)
  )
  .result(function(documents) {
      console.log('workpaper count: ' + documents.length);
      
      documents.map(function(document) {
          console.log('\n URI: ' + document.uri);
          console.log('Title: ' + document.content.title);
      });

      if(documents.length === 0)
        loadWorkpapers();
      else
        console.log("\nNo Docs Loaded... " + documents.length);
    })
  .catch(function(error) {
      console.log(error);
    });
};

// Document descriptors to pass to write(). 
var workpapers = [
  { uri: '/client/ey001/workpapers/janedoe0041/user0001.json',
    contentType: 'application/json',
    collections: ['workpapers'],
    'permissions':[
      {'role-name':'rest-reader','capabilities':['read']},
      {'role-name':'rest-writer','capabilities':['update']}
    ],
    content: {
        _id:'16158753177277972267',
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
        _id:'873545202165781395',
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
        _id:'10410983849088555097',
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
        _id:'7223032574925848618',
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
        _id:'16760471221848622320',
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
        _id:'4035081300763142139',
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
        _id:'847130026600435660',
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
        _id:'16105922826147280797',
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
        _id:'12917971551984574318',
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
        _id:'4061496476328487874',
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
        _id:'12970801903115265788',
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
        _id:'9730020277821867839',
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
        _id:'16132338001712626532',
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
        _id:'9782850628952559309',
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
        _id:'6594899354789852830',
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
        _id:'3406948080627146351',
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

function loadWorkpapers() {
  console.log('loading workpapers...');

  db.documents.write(workpapers).result(
    function(response) {
      console.log('Loaded the following documents:');
      response.documents.forEach( function(document) {
        console.log('  ' + document.uri);
      });
    }, 
    function(error) {
      console.log(JSON.stringify(error, null, 2));
  });
};

exports.createDefaultWorkpapers = createDefaultWorkpapers;
