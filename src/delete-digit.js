const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) { 
  let max = 0;
  let array = Array.from(n.toString(), Number);
  for(let i = 0; i < array.length; i++) if(Number(array.join('').replace(array[i],'')) > max) max = Number(array.join('').replace(array[i],'')) ; 
  return max;
} 
module.exports = {
  deleteDigit
};
