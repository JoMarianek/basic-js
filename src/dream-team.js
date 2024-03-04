const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = '';

  if(Array.isArray(members)) {
  let stringsOnly = members.filter(element => typeof(element) === 'string');

  teamName = stringsOnly.reduce((acc, str) => acc + str.trim()[0].toUpperCase(), '');
  teamName = teamName.split('').sort().join('');
  }
  return teamName;
}

module.exports = {
  createDreamTeam
};
