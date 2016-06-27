var reserved = require('reserved');

var regex = /(^[^a-zA-Z_])|([^a-zA-Z_0-9])/g;

var onBadChar = function(bad_char){
  return '$' + bad_char.charCodeAt(0) + '$';
};

module.exports = function(str){
  var out = str.replace(regex, onBadChar);

  if(reserved.indexOf(out) >= 0){
    return '$' + out + '$';
  }
  return out;
};
