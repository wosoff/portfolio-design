/**
 * @param {string} aTagID
 * @returns {string} 
 */
export default function convertIDtoSessionKey(aTagID) {
  const splitter = '-'
  const blank = ''
  return aTagID.split(splitter)
    .filter(elem => elem !== blank)[1]
    .trim()
    .toUpperCase()
}