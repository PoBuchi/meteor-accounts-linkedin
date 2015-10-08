Accounts.oauth.registerService('linkedin');

if (!Accounts.linkedin) {
  Accounts.linkedin = {};
}

if (Meteor.isClient) {
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
} else {
	Accounts.addAutopublishFields({
	  // publish all fields including access token, which can legitimately
	  // be used from the client (if transmitted over ssl or on
	  // localhost). https://developer.linkedin.com/documents/authentication
	  forLoggedInUser: ['services.linkedin'],
	  // forOtherUsers: [
	  //   'services.linkedin.id', 'services.linkedin.firstName', 'services.linkedin.lastName'
	  // ]
	});
}