var slice = Array.prototype.slice
        
module.exports = function logger(namespace) {
   return console.log.bind(undefined,namespace)
}

