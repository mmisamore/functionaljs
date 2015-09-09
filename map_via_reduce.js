concat = Array.prototype.concat

module.exports = function arrayMap(arr, fn) {
   return arr.reduce(function(acc,c,i,a) {
      return concat.call(acc,[fn(c)])
   },[])
}
