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
var user = {
  username: 'jonnie.spratley',
  name: 'Jonnie Spratley',
  email: 'jonnie.spratley@ge.com',
  image: 'https://goo.gl/WKu72K'
};
var navItems = [{
  label: 'Dashboards',
  icon: 'fa:fa-tachometer'
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

function createDemoCards(count) {
  var i = 0,
    lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d' +
    'olor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  _out = [];
  for (; i < count; i++) {
    _out.push({
      title: 'Card ' + i,
      body: lorem
    });
  }
  return _out;
}

function createDemoItems(count) {
  var i = 0,
    lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d' +
    'olor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
