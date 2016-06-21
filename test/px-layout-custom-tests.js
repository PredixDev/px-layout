/* global assert, suite, test*/
// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {

  suite('<px-layout>', function () {
    var element = document.getElementById('fixture');
    test('renders', function () {
      assert.ok(element);
    });



    suite('<px-drawer-layout>', function () {
      var element = document.getElementById('px_layout_1');
      test('renders', function () {
        assert.ok(element);
      });
      test('has reference to px-drawer', function () {
        assert.ok(element.drawer);
      });

      test('element is [drawer-toggle] when tapped toggles px-drawer', function () {
        assert.ok(element.drawer);
      });
    });


    suite('<px-header-layout>', function () {
      var element = document.getElementById('px_layout_2');

      test('renders', function () {
        assert.ok(element);
      });

      test('has reference to px-header', function () {
        assert.ok(element.header);
      });

      test('has reference to px-footer', function () {
        assert.ok(element.footer);
      });
    });


  });
}
