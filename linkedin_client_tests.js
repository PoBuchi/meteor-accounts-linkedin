Tinytest.addAsync('pauli:accounts-linkedin - use correct id', 
  function (test, done) {
    var onLoginHandler, onLoginFailureHandler;
    Meteor.logout(loginWithLinkedIn);
    
    function loginWithLinkedIn(err) {
      test.isUndefined(err, 'Error logging out');
      onLoginHandler = Accounts.onLogin(checkId);
      onLoginFailureHandler = Accounts.onLoginFailure(loginFailed);
      Meteor.loginWithLinkedIn({ loginStyle: 'popup'});
    }
    
    function loginFailed() {
      test.fail('Login failed');
      cleanUp();
    }
    
    function checkId() {
      test.equal(Meteor.user().services.linkedin.id, '1R2RtA', 'linkedin.id');
      cleanUp();
    }
    
    function cleanUp() {
      onLoginHandler.stop();
      onLoginFailureHandler.stop();
      done();
    }
  }
);
