module.exports = {
	verbose: true,
	plugins: {
		local: {
			browsers: ['chrome']
		},
		sauce: {
			disabled: true
		}
	},
	suites: [
    'test/px-responsive-layouts-test-fixture.html'
  ]
};
