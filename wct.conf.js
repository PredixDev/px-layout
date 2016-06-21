module.exports = {
	verbose: true,
	plugins: {
		local: {
			browsers: ['chrome']
		},
		sauce: {
			disabled: true
		},
		istanbul: {
			'dir': './coverage',
			'reporters': ['text-summary', 'lcov'],
			'include': [
				'/px-drawer-layout/px-*.html',
				'/px-header-layout/px-*.html',
				'/px-layout/px-*.html',
				'/px-*.html'
			],
			'exclude': []
		}
	},
	suites: [
    'test/px-responsive-layouts-test-fixture.html'
  ]
};
