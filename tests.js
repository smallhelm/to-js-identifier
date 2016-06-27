var toId = require('./');
var test = require('tape');

var genInt = require('gent/generator/integer');
var genString = require('gent/generator/string');

var nextStr = (function(){
  var g = genString(genInt(0, 100));
  return function(){
    return g.next().value;
  };
}());

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

test('no collisions', function(t){
  var out_in = {};

  var testStr = function(str){
    var out = toId(str);
    if(!out_in.hasOwnProperty(out)){
      out_in[out] = str;
      t.ok(true);
      return;
    }
    t.equal(out_in[out], str, 'if there is a same output, it should have the same input');
  };

  var i = 0;
  while(i < 100000){
    testStr(nextStr());
    i++;
  }

  t.end();
});
