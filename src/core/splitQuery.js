/**
 * @description It split query, which is from post in form, with equal sign.
 * @param {Buffer} query
 * @returns {string[]} [key of query, key of value]
 */
function splitQuery(query) {
  const str = query.toString();

  const separator = '=';
  const separatedQuery = str.split(separator)
    .filter((el) => el !== '');

  if (separatedQuery.length !== 2) {
    throw new Error('Invalid query split by =');
  }

  return separatedQuery;
}

module.exports = splitQuery;
