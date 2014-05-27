// sorts using divide and conquer approach
module.exports = function(sort_me) {
  return merge_sort(sort_me, 0, sort_me.length-1);
}
function merge_sort = function(sort_me, start, end) {
  if (start >= end) return;
  var middle = Math.floor((end - start)/2);
  merge_sort(sort_me, start, middle);
  merge_sort(sort_me, middle+1, end);
  merge(sort_me, start, middle, end);
}
function merge(sort_me, start, middle, end) {
  var left = sort_me.slice(start, middle+1);
  var right = sort_me.slice(middle+1, end+1);
  left.push(Infinity);
  right.push(Infinity);
  var i = 0;
  var j = 0;
  for (var k = start; k <= end; k++) {
    if (left[i] <= right[i]) {
      sort_me[k] = left[i];
      i++;
      continue;
    }
    sort_me[k] = right[i];
    j++;
  }
}