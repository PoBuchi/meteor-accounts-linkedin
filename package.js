Package.describe({
  name: 'jamesfirst:accounts-linkedin',
  summary: "Accounts service for LinkedIn accounts",
  version: "1.1.2",
  git: "https://github.com/StarLinkCo/meteor-accounts-linkedin"
});

Package.onUse(function(api) {

  api.use('accounts-base@1.1.3', ['client', 'server']);
  api.use('accounts-oauth@1.0.0', ['client', 'server']);
  api.use('jamesfirst:linkedin@1.1.5', ['client', 'server']);

  api.addFiles(['linkedin_login_button.css'], 'client');
  api.addFiles('linkedin_common.js', ['client', 'server']);
  api.addFiles('linkedin_server.js', 'server');
  api.addFiles('linkedin_client.js', 'client');
});


