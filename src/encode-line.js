const { NotImplementedError } = require('../lib');

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
  let num = 0,
    res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      num += 1;
      res = num + str[i]
    }
  }
}
module.exports = {
  encodeLine
};
