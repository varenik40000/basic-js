const { NotImplementedError } = require('../lib');

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
  let symbol = n.toString().length;
  let result =[];
    for (let i=0;i<n.toString().length; i++){
        result.push(n.toString().replace(n.toString().split('').splice(i, 1), ''))

    }
    return Math.max(...result)
}

module.exports = {
  deleteDigit
};
