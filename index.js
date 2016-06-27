var reserved = require('reserved');

module.exports = function(str){
  var out = str;
  out = out.replace(/(^[^a-zA-Z_])|([^a-zA-Z_0-9])/g, function(bad_char){
    return '$' + bad_char.charCodeAt(0) + '$';
  });

  if(reserved.indexOf(out) >= 0){
    return '$' + out + '$';
  }
  return out;
};
