Meteor.startup(function () {
  Accounts.loginServiceConfiguration.upsert({
    service: 'linkedin'
  }, {
    service: 'linkedin',
    clientId: 'fakeClientId',
    secret: 'fakeSecret',
    loginStyle: 'popup'
  });
});
