var mongoose = require('mongoose');

var workpaperSchema = mongoose.Schema ({
  title: {type:String, required:'{PATH} is required!'},
  pending: {type:Boolean, required:'{PATH} is required!'},
  submitted: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});

var Workpaper = mongoose.model('Workpaper', workpaperSchema);

function createDefaultWorkpapers() {
  Workpaper.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Workpaper.create(
      {
        title:'EY: Home Depot Q1 2014 Earnings',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 41',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('1/5/2015'),
        tags: ['Earnings', '2014']
      });
      Workpaper.create(
      {
        title:'EY: Coca Cola Q3 2014 Earnings',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 42',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('2/5/2015'),
        tags: ['Earnings', '2014']
      });
      Workpaper.create(
      {
        title:'EY: Apple Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('3/5/2015'),
        tags: ['Annual Tax', '2014', 'AAPL']
      });
      Workpaper.create(
      {
        title:'EY: Microsoft Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('4/5/2015'),
        tags: ['Annual Tax', '2014', 'MSFT']
      });
      Workpaper.create(
      {
        title:'EY: Land Rover Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 44',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('5/5/2015'),
        tags: ['Annual Tax', '2014', 'JLR']
      });
      Workpaper.create(
      {
        title:'EY: Land Rover Corp Q3 2012 Earnings Report',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('6/5/2015'),
        tags: ['Earnings', '2012', 'JLR']
      });
      Workpaper.create(
      {
        title:'EY: Land Rover Corp Q4 2012 Earnings Report',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('7/5/2015'),
        tags: ['Earnings', '2012', 'Q4', 'JLR']
      });
      Workpaper.create(
      {
        title:'EY: News Corp Q4 2014 Earnings',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('8/5/2015'),
        tags: ['Earnings', '2014', 'FOXA']
      });
      Workpaper.create(
      {
        title:'EY: News Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 42',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('9/10/2014'),
        tags: ['Annual Tax', '2014', 'FOXA']
      });
      Workpaper.create(
      {
        title:'EY: Amazon Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 41',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('10/10/2014'),
        tags: ['Annual Tax', '2014', 'AMZN']
      });
      Workpaper.create(
      {
        title:'EY: Google Corp FY2014 Corporate Tax',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 43',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('11/10/2014'),
        tags: ['Annual Tax', '2014', 'GOOGL']
      });
      Workpaper.create(
      {
        title:'EY: City of New York 2014 Annual Finance Report',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 42',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: true,
        submitted: new Date('12/10/2014'),
        tags: ['Annual Report', '2014', 'NYC']
      });
      Workpaper.create(
      {
        title:'EY: Scary Circus Clown Corp Q1 FY2012 Earnings',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 41',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('5/15/2014'),
        tags: ['Earnings', 'Q1', '2012']
      });
      Workpaper.create(
      {
        title:'PWC: Dell Corp Q1 FY2012 Earnings',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 41',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('5/15/2014'),
        tags: ['Earnings', 'Q1', '2012', 'DELL']
      });
      Workpaper.create(
      {
        title:'PWC: Dell Corp Annual Report FY2014',
        type:'user data',
        client:'ey001',
        user: 'Jane Doe 41',
        userDataId:'31989285604312239',
        templateId:'3857790183476763686',
        templateUri:'/client/ey001/template/C2903000/C2903000.xml',
        modified:'2015-03-03T22:55:01.855081Z',
        pending: false,
        submitted: new Date('5/15/2014'),
        tags: ['Annual Report', '2014', 'DELL']
      });
    }
  })
};

exports.createDefaultWorkpapers = createDefaultWorkpapers;
