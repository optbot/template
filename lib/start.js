(function() {
  'use strict';

  exports = module.exports = testMsg;

  function testMsg() {
    console.log('@optbot/template: testing');
  }

  exports.foo = function() {
    console.log('@optbot/template: other modules can call foo');
  };

  testMsg();
  console.log('@optbot/template: other modules only see this on require()');
})();
