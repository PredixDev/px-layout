module.exports = {
	verbose: true,
	plugins: {
		local: {
			browsers: ['chrome', 'firefox']
		},
		sauce: {
			name: 'px-layout',
			disabled: false,
			browsers: [
        {
          'browserName': 'safari',
          'version': '9'
        }
      ]
		},
		istanbul: {
			'dir': './coverage',
			'reporters': ['text-summary', 'lcov'],
			'include': [
				'/px-drawer-layout/px-*.html',
				'/px-media-query/px-*.html',
				'/px-header-layout/px-*.html',
				'/px-layout/px-*.html',
				'/px-*.html'
			],
			'exclude': []
		}
	},
	suites: [
    'test/px-layout-test-fixture.html'
  ]
};
