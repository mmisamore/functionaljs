// fn == previousValue, currentValue, index and the array we're iterating over.
function reduce(arr, fn, initial) {
   if(arr.length == 0) return initial
   if(arr.length == 1) return fn(initial, arr[0], 0, arr)

   var b = reduce(arr.slice(1),fn,initial)
   return reduce([arr[0]],fn,b)
}

module.exports = reduce
