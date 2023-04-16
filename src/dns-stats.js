const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) { 
  let result = {};
  for (let  i = 0;i< domains.length; i++)  {
    let arr =  domains[i].split('.').reverse();
    let str = '';
    for(let j = 0; j < arr.length; j ++){
      if(j == 0){
        if(!!result['.'+arr[j]]) result['.'+arr[j]] +=1;
        else result['.'+arr[j]] = 1;
      } 
      if(j>0) str += '.' + arr[j]; else str ='.'+ arr[j];
      console.log(str)
      if(j>0) {if(!!result[str]) result[str] +=1;
      else result[str] = 1;}
    }
  }
  return result;
}
 

module.exports = {
  getDNSStats
};
