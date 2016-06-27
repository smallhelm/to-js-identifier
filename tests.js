var toId = require('./');
var test = require('tape');

test('it', function(t){

  t.equals(toId('null'), '$null$');

  t.equals(toId('not-ok-blah#shiz'), 'not$45$ok$45$blah$35$shiz');

  t.equals(toId('123'), '$49$23');
  t.equals(toId('$49$23'), '$36$49$36$23');

  t.equals(toId('with spaces'), 'with$32$spaces');

  t.end();
});
