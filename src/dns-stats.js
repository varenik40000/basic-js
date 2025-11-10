const { NotImplementedError } = require('../lib');

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
  let dns=[];
  let symbol = '.';
  let arr_1 = [];
  for (let i = 0; i < domains.length; i++){
      for (let j = domains[i].length; j>=0;j--){
        if (domains[i][j] === symbol) {
            dns.push(domains[i].slice([j],domains[i].length));
        }
  }
  }
  for (let i = 0; i < domains.length; i++){
  dns.push(domains[i]);}
     return new Set(dns);
     
      
 
}

module.exports = {
  getDNSStats
};
