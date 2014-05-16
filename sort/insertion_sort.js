module.exports = function(sort_me, comparator) {
  comparator = comparator || default_coparator;
  // from the book, which mutates original array:
  for (var j = 1; j < sort_me.length; j++) {
    // the key we are observing
    var key = sort_me[j];
    // set i to the index of the preceding element
    var i = j - 1;
    while (i >= 0 && sort_me[i] > key) {
      sort_me[i+1] = sort_me[i];
      i--;
    }
    sort_me[i+1] = key;
  }
}

function default_comparator(a, b) {
  return (a>b);
}