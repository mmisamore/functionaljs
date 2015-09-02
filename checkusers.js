function checkUsersValid(goodUsers) {
   return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(s) {
         return goodUsers.some(function(g) {
            return g == s
         })
      })
   };
}

module.exports = checkUsersValid
