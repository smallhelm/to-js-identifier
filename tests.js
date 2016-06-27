var toId = require('./');
var test = require('tape');

test('it', function(t){

  t.equals(toId('foo'), 'foo');

  t.equals(toId('null'), '$null$');
  t.equals(toId('undefined'), '$undefined$');
  t.equals(toId('function'), '$function$');
  t.equals(toId('var'), '$var$');

  t.equals(toId('not-ok-blah#shiz'), 'not$45$ok$45$blah$35$shiz');

  t.equals(toId('123'), '$49$23');
  t.equals(toId('$49$23'), '$36$49$36$23');

  t.equals(toId('with spaces'), 'with$32$spaces');

  t.equals(toId('$'), '$36$');
  t.equals(toId(' '), '$32$');
  t.equals(toId('$32$'), '$36$32$36$');

  t.equals(toId('not-js'), 'not$45$js');

  t.end();
});
