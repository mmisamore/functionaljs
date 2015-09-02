function countWords(inputWords) {
   return inputWords.reduce(function(o,w) {
      o[w] = (o[w]+1) || 1
      return o
   }, {})
}

module.exports = countWords
