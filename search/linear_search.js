module.exports = function(key, in_me) {
  for (var i = 0; i < in_me.length; i++) {
    if (key == in_me[i]) return key;
  }
  return null;
}