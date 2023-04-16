const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {  
  let addition = "";
  if(typeof options.additionSeparator === 'undefined') options.additionSeparator = '|';
  if(typeof options.separator === 'undefined') options.separator = '+'; 

  if(typeof options.addition !== 'undefined') addition = String(options.addition) + "ё";  
  if(!!options.additionRepeatTimes) addition = addition.repeat(options.additionRepeatTimes).split('ё').slice(0,-1).join(options.additionSeparator); 
  else  addition = addition.split('ё').slice(0,-1).join(options.additionSeparator); 

  str = String(str) + addition + 'ё';  
  if(!!options.repeatTimes) str = str.repeat(options.repeatTimes).split('ё').slice(0,-1).join(options.separator);
  else str =  str.split('ё').slice(0,-1).join(options.separator);
  return str;
}   
module.exports = {
  repeater
};
