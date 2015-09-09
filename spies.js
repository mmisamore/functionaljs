function Spy(target, method) {
   var c = 0

   if(typeof target[method] == 'function') {
      console.log('method is defined')
   }

   var oldMethod = target[method]
   target[method] = function() {
      console.log(c)
      c = c + 1
      var res = oldMethod.apply(oldMethod,this.arguments) 
      console.log(res)
      return res
      //   oldMethod(this.arguments) 
   }
   return { count: c }
}

module.exports = Spy
