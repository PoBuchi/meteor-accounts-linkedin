Package.describe({
  name: 'pauli:accounts-linkedin',
  summary: "Login service for LinkedIn accounts",
  version: "1.5.0",
  git: "https://github.com/PoBuchi/meteor-accounts-linkedin.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.1')

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('pauli:linkedin-oauth@1.0.0', ['client', 'server']);

  api.imply('pauli:linkedin-oauth');

  // If users use accounts-ui but not facebook-config-ui, give them a tip.
  api.use(['accounts-ui', 'pauli:linkedin-config-ui'], ['client', 'server'], { weak: true });
  api.addFiles("notice.js");

  api.addFiles("linkedin.js");
});