const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {   
  let result = Array.from(n.toString(), Number);
  while (result.length > 1){
    let newArray = result.reduce((sum, a) => sum + a, 0);
    result = Array.from(newArray.toString(), Number);
  }
  return result[0];
}
console.log(getSumOfDigits(100))

module.exports = {
  getSumOfDigits
};
