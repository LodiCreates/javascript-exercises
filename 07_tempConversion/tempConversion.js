const ftoc = function(fahrenheit) {
  let result;  // declare variable to store result in
  result = (fahrenheit - 32) * (5 / 9);  // subtract 32 and multiply by 5/9
  result = +result.toFixed(1);  // round to first decimal
  return result;  // return result
};

const ctof = function(celsius) {
  let result;  // declare variable to store result in
  result = celsius * (9 / 5) + 32;  // multiply by 9/5 and add 32
  result = +result.toFixed(1);  // round to first decimal
  return result;  // return result
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
