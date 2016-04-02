import arrayFrom from 'array-from';

/**
* a ponyfill for the ES6 String.raw()
*
* @param {object} callSite - well-formed template call site object, like { raw: 'string' }
* @param {any} substitutions - contains substitution values
* @throws {TypeError} a TypeError is thrown if the first argument is not a well formed object.
* @returns {string} rawString - the original, uninterpreted text
* @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/raw
*/
export default (callSite = {}, ...substitutions) => {
  let template;
  try {
    template = arrayFrom(callSite.raw);
  } catch (e) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  return template.map((chunk, i) => {
    if (callSite.raw.length <= i) {
      return chunk;
    }
    return substitutions[i - 1] ? substitutions[i - 1] + chunk : chunk;
  }).join('');
};
