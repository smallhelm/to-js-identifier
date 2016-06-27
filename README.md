# to-js-identifier

[![build status](https://secure.travis-ci.org/smallhelm/to-js-identifier.svg)](https://travis-ci.org/smallhelm/to-js-identifier)
[![dependency status](https://david-dm.org/smallhelm/to-js-identifier.svg)](https://david-dm.org/smallhelm/to-js-identifier)

Convert any string (even reserved words) to a valid javascript identifier.

Useful when writing compile to JS languages.

```js
var toId = require('to-js-identifier');

//valid ids just go right through
toId('foo') === 'foo'

//convert your string to a valid js identifier
toId('not-js') === 'not$45$js'

//as use can see it wraps invalid chars with '$' + c.charCodeAt(0) + '$'
//Even though $ is a valid identifier, this function will escape it, so it
//is not possible that 2 inputs generate the same output
toId('$') === '$36$'

//reserved words are escaped
toId('null') === '$null$'
toId('var')  === '$var$'

// yes I know undefined is technically an identifier, but it shouldn't be!!!
toId('undefined') === '$undefined$'
```

## License
MIT
