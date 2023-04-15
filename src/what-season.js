const { NotImplementedError } = require('../extensions/index.js');const { expect, assert } = require('chai');
const { testOptional, checkForThrowingErrors, checkForNotThrowingErrors, CONSTANTS } = require('../extensions/index.js');
const { CORRECT_RESULT_MSG, INCORRECT_RESULT_MSG } = CONSTANTS;

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']; 
  try{   
    if(!date) return('Unable to determine the time of year!');     
    else if(!(typeof date.getMonth === 'function' && Object.getOwnPropertyNames(date).length == 0 && !isNaN(date.valueOf()))) throw new Error('Invalid date!');
    else return seasons[date.getMonth()];
  }catch(er){
    throw new Error(er.message); 
  }
}  
module.exports = {
  getSeason
};
