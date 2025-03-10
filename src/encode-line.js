const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) { 
  let result = '';
  let count = 0;
  for(let i = 0;i < str.length; i++){
    if(str[i+1]==str[i]) count++;
    else{
      result += count>0?(count+1)+str[i] : str[i];
      count = 0;
    }
  }
  return result;
}
console.log(encodeLine('aabbbc'))
module.exports = {
  encodeLine
};
