// Meteor.loginWithLinkedin = function (options, callback) {
//   var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
//   LinkedIn.requestCredential(options, credentialRequestCompleteCallback);
// };

  Meteor.loginWithLinkedIn = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    LinkedIn.requestCredential(options, credentialRequestCompleteCallback);
  };

  // Make it work with 0.9.3
  Meteor.loginWithLinkedin = Meteor.loginWithLinkedIn;
