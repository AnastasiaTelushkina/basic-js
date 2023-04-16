const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) { 
  let commonChar = [];
  let longString = "";
  let shortString = "";
  if(s1.length > s2.length){
    longString = s1; 
    shortString = s2; 
  }else{
    longString = s2; 
    shortString = s1; 
  }
  for(let i = 0;i<shortString.length;i++){   
    if(longString.indexOf(shortString[i]) != -1){ 
      commonChar.push(shortString[i]);  
      longString = longString.replace(shortString[i], '');  
    } 
  }
  return commonChar.length;
} 
module.exports = {
  getCommonCharacterCount
};
