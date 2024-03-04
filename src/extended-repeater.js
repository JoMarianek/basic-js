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
  str = String(str);

  let repeatTimes = options.repeatTimes || 1;
  let separator = 'separator' in options ? String(options.separator) : '+';
  let addition = 'addition' in options ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = 'additionSeparator' in options ? String(options.additionSeparator) : '|';

  let fullAddition = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  let result = new Array(repeatTimes).fill(str + fullAddition).join(separator);

  return result;
}

module.exports = {
  repeater
};
