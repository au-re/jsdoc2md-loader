const jsdoc = require("jsdoc-api");

/**
 * Loader function
 *
 * @param {string} source - string to parse by jsdoc-api
 * @return {array} - an array explaining the content of the source
 */
module.exports = (source) => jsdoc.explainSync({ source });
