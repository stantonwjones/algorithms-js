// assumes least significant bit first and both arrays are of equal length
module.exports = function(first_bin_array, second_bin_array) {
  var sum_bin_array = new Array();
  var i = 0;
  var carry = false;
  for (var i = 0; i < first_bin_arr.length; i++) {
    if (carry && first_bin_array[i] && second_bin_array[i])
      sum_bin_array[i] = 1;
    else if (carry && (first_bin_array[i] || second_bin_array[i]))
      sum_bin_array[i] = 0;
    else if (first_bin_array[i] != second_bin_array[i]) 
      sum_bin_array[i] = 1;
    else if (first_bin_array[i] && second_bin_array[i]) {
      carry = 1;
      sum_bin_array[i] = 1;
    } else if (!first_bin_array[i] && !second_bin_array[i]) {
      sum_bin_array[i] = carry;
      carry = 0;
    }
  }
  if (carry) sum_bin_array.push(1);
}