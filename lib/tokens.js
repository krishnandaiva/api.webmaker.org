var TOKENS = {
  "validToken": {
    scope: "user",
    user_id: 1
  },
  "validToken2": {
    scope: "user",
    user_id: 2
  },
  "missingScope": {
    scope: "projects",
    user_id: 3
  }
};

module.exports = function tokenValidator(token, callback) {
  var t = TOKENS[token];
  callback(null, !!t, t);
};