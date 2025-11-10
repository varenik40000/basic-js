const { NotImplementedError } = require('../lib');

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
function getSeason(...date) {
  if (date.length === 0) {return 'Unable to determine the time of year!';}
  else if (!(new Date(date).getTime())) { throw new Error(`Invalid date!`);}
  else if ((new Date(date).getMonth() <= 1) || (new Date(date).getMonth() >= 11 )) {return 'winter';}
  else if ((new Date(date).getMonth() >= 2) && (new Date(date).getMonth() <= 4 )) {return 'spring';}
 else if ((new Date(date).getMonth() >= 5) && (new Date(date).getMonth() <= 7 )) {return 'summer';}
 else if ((new Date(date).getMonth() >= 8) && (new Date(date).getMonth() <= 10 )) {return 'autumn'};
}

module.exports = {
  getSeason
};
