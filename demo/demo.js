window.EXAMPLES = [{
  icon: 'fa:fa-check',
  color: 'green',
  href: 'template-drawer-layout.html',
  title: 'Drawer Layout'
}, {
  icon: 'fa:fa-check',
  color: 'green',
  href: 'template-drawer-header-layout.html',
  title: 'Drawer Header Layout'
}, {
  icon: 'fa:fa-check',
  color: 'green',
  href: 'template-header-layout.html',
  title: 'Header Layout'
}, {
  href: 'template-basic.html',
  title: 'Basic Layout'
}, {
  icon: 'fa:fa-check',
  color: 'green',
  href: 'template-vanilla-seed-layout.html',
  title: 'Vanilla Seed Layout'
}, {
  href: 'template-dashboard.html',
  title: 'Dashboard Seed Layout'
}, {
  href: 'template-splitview.html',
  title: 'Splitview Layout'
}, {
  href: 'template-login.html',
  title: 'Login'
}, {
  href: 'template-cards.html',
  title: 'Grid to List'
}, {
  href: 'template-tabs-to-columns.html',
  title: 'Tabs to Columns'
}, {
  href: 'template-tabs-to-sidebar.html',
  title: 'Tabs to Sidebar'
}, {
  href: 'template-content-mini-sidebar.html',
  title: 'Context Mini Sidebar'
}, {
  href: 'template-content-sidebar.html',
  title: 'Context Static Sidebar'
}, {
  href: 'template-google-example.html',
  title: 'Google Example'
}, {
  href: 'template-detail.html',
  title: 'Full Detail'
}, {
  href: 'template-detail-asset.html',
  title: 'Asset Detail'
}, {
  href: 'template-detail-turbine.html',
  title: 'Turbine Detail'
}];

var demo = window.demo = {};
var user = {
  username: 'jonnie.spratley',
  name: 'Jonnie Spratley',
  email: 'jonnie.spratley@ge.com',
  image: 'https://goo.gl/WKu72K'
};
demo.user = user;
var navItems = [{
  label: 'Dashboard',
  icon: 'fa:fa-tachometer'
}, {
  label: 'Blank View',
  icon: 'fa:fa-square'
}, {
  label: 'Details',
  icon: 'fa:fa-square'
}, {
  label: 'Alerts',
  icon: 'fa:fa-exclamation-triangle'
}, {
  label: 'Cases',
  icon: 'fa:fa-briefcase'
}, {
  label: 'Analysis',
  icon: 'fa:fa-bar-chart'
}];
demo.navItems = navItems;
demo.alerts = [{
    title: 'Normal Issue',
    body: 'Text body value',
    type: 'normal',
    icon: 'fa:fa-exclamation-triangle'
  }, {
    title: 'Fixed Issue',
    body: 'Text body value',
    icon: 'fa:fa-exclamation-triangle'
  }, {
    title: 'Fixed Issue',
    body: 'Text body value',
    icon: 'fa:fa-exclamation-triangle'
  }, {
    title: 'Fixed Issue',
    body: 'Text body value',
    icon: 'fa:fa-exclamation-triangle'
  }, {
    title: 'Fixed Issue',
    body: 'Text body value',
    icon: 'fa:fa-exclamation-triangle'
  }, {
    title: 'Fixed Issue',
    body: 'Text body value',
    icon: 'fa:fa-exclamation-triangle'
  }

];
demo.cases = [{
  title: 'Case 1',
  icon: 'fa:fa-exclamation-triangle',
  body: 'A new case'
}, {
  title: 'Case 1',
  icon: 'fa:fa-exclamation-triangle',
  body: 'A new case'
}];

demo.reports = [{
  title: 'Symptoms',
  label1: '10/01/15 1:32 PM',
  body: 'There was a sustained (non-correcting) step change, Lorem ipsum dolor sit amet, consectetur adipisicing eli.'
}, {
  title: 'Symptoms',
  label1: '10/01/15 1:32 PM',
  body: 'There was a sustained (non-correcting) step change, Lorem ipsum dolor sit amet, consectetur adipisicing eli.'
}, {
  title: 'Symptoms',
  label1: '10/01/15 1:32 PM',
  body: 'There was a sustained (non-correcting) step change, Lorem ipsum dolor sit amet, consectetur adipisicing eli.'
}];

demo.documents = [{
  name: 'Time Series Inlet Flow',
  type: 'pdf',
  size: '714 KB',
  created: '10/01/15 1:32 PM'
}, {
  name: 'Time Series Flow',
  type: 'pdf',
  size: '2 MB',
  created: '10/06/15 6:16 PM'
}, {
  name: 'Gas Turbine Map',
  type: 'pdf',
  size: '1.4 MB',
  created: '03/19/16 2:16 PM'
}];



demo.chartData = {};

//Browser stats
demo.chartData.browsers = {
  chartData: [70.4, 3.7, 17.5, 5.8, 1.5],
  chartLabels: ['Chrome', 'Safari', 'Firefox', 'IE', 'Opera'],
  chartColors: ['#029bde', '#99399b', '#e23838', '#f88303']
};


//Mobile device stats
demo.chartData.devices = {
  chartData: [1.22, 3.36, 0.40, 0.14],
  chartLabels: ['iOS', 'Android', 'Windows', 'Others'],
  chartColors: []
};


//Screen stats
demo.chartData.screens = {
  chartData: [30.7, 18, 35, 6, 4, 3, 1, 3],
  chartLabels: [
    'Other higher',
    '1920x1080',
    '1366x768',
    '1280x1024',
    '1280x800',
    '1024x768',
    '800x600',
    'Lower'
  ],
  chartColors: []
};



function createDemoCards(count) {
  var i = 0,
    lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq',
    _out = [];
  for (; i < count; i++) {
    _out.push({
      title: 'Card ' + i,
      body: lorem
    });
  }
  return _out;
}

demo.createDemoCards = createDemoCards;


function createDemoItems(count) {
  var i = 0,
    lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    _out = [];
  for (; i < count; i++) {
    _out.push({
      id: 'item-' + i,
      title: 'Item ' + i,
      body: lorem
    });
  }
  return _out;
}
demo.createDemoItems = createDemoItems;


function createToc(id) {
  var toc = document.getElementById(id);
  var headings = document.querySelectorAll('h2'),
    heading, link, li;
  for (var i = 0; i < headings.length; i++) {
    heading = headings[i].textContent;
    headings[i].id = headings[i].textContent.replace(/\W/g, '-');
    li = document.createElement('li');
    link = document.createElement('a');
    link.href = '#' + headings[i].id;
    link.textContent = heading;
    li.appendChild(link);
    toc.appendChild(li);
    console.log('Adding id to heading', headings[i]);
  }
}


// TODO: Lets wait for components to be ready
document.addEventListener('WebComponentsReady', function() {



  console.warn('WebComponentsReady ready');
});
console.warn('main.js loaded');
