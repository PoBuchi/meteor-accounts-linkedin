Package.describe({
  name: 'pauli:accounts-linkedin',
  summary:
    'Login service for LinkedIn accounts, use with Meteor 1.6.1 & up',
  version: '4.2.0',
  git:
    'https://github.com/PoBuchi/meteor-accounts-linkedin.git',
})

Package.onUse(api => {
  api.versionsFrom('1.6.1')

  api.use('accounts-base', ['client', 'server'])
  api.imply('accounts-base', ['client', 'server'])

  api.use('accounts-oauth', ['client', 'server'])
  api.use('pauli:linkedin-oauth@4.2.0', [
    'client',
    'server',
  ])

  api.use('pauli:linkedin-oauth')
  api.imply('pauli:linkedin-oauth')

  // If users use accounts-ui but not linkedin-config-ui, give them a tip.
  api.use(
    ['accounts-ui', 'pauli:linkedin-config-ui@4.2.0'],
    ['client', 'server'],
    { weak: true },
  )
  api.addFiles('notice.js')

  api.addFiles('linkedin.js')
})
