Package.describe({
  name: 'pauli:accounts-linkedin',
  summary: "Accounts service for LinkedIn accounts",
  version: "1.2.0",
  git: "https://github.com/PauliBuccini/meteor-accounts-linkedin.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4')

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('pauli:linkedin@1.2.0', ['client', 'server']);

  api.addFiles(['linkedin_login_button.css'], 'client');
  api.addFiles('linkedin_common.js', ['client', 'server']);
  api.addFiles('linkedin_server.js', 'server');
  api.addFiles('linkedin_client.js', 'client');
});


Package.onTest(function(api) {
  api.versionsFrom('1.0.4');
  api.use('tinytest');
  api.use('autopublish');
  api.use('http', ['server']);
  api.use('ryepdx:linkedin-fake@0.0.4');
  api.use('pauli:accounts-linkedin');

  api.addFiles('linkedin_client_tests.js', 'client');
  api.addFiles('linkedin_server_tests.js', 'server');
});
