module.exports = {
	verbose: true,
	testTimeout: 5 * 60 * 1000,
	plugins: {
		local: {
			browsers: ['chrome', 'firefox']
		},
		sauce: {
			name: 'px-layout',
			disabled: true,
			browsers: [
                "Windows 8.1/internet explorer",
                "OS X 10.10/chrome",
                "OS X 10.10/firefox",
                "OS X 10.10/safari"
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
