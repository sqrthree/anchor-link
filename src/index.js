/**
 * Convert input to an anchor link with github flavored markdown style.
 * @param  {string} input title that needs to be converted
 * @return {string}       anchor link
 */
module.exports = input => {
  if (typeof input !== 'string') throw new Error('Expecting to receive a string but got a ' + typeof input)

  return input
    .trim()
    .toLowerCase()
    .replace(/[`~!@#$%^&*()+=<>?,./:;"'|{}\[\]\\]/g, '')
    .replace(
      /[　。？！，、；：“”【】（）〔〕［］﹃﹄“”‘’﹁﹂—…－～《》〈〉「」]/g,
      ''
    )
    .replace(/\s+/g, '-')
}
