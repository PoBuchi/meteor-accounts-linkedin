Package.describe({
  summary: "Accounts service for LinkedIn accounts",
  version: "1.0.1",
  git: "https://github.com/PauliBuccini/meteor-accounts-linkedin.git"
});

Package.onUse(function(api) {

  api.use('accounts-base@1.0.1', ['client', 'server']);
  api.use('accounts-oauth@1.0.0', ['client', 'server']);
  api.use('pauli:linkedin@1.1.1', ['client', 'server']);

  api.addFiles(['linkedin_login_button.css'], 'client');
  api.addFiles('linkedin_common.js', ['client', 'server']);
  api.addFiles('linkedin_server.js', 'server');
  api.addFiles('linkedin_client.js', 'client');
});


