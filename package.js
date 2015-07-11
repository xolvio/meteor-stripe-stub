Package.describe({
  name: 'xolvio:stripe-stub',
  version: '0.0.2',
  summary: 'Allows you to stub/restore Stripe at runtime for testing purposes',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('mrgalaxy:stripe@2.1.0');
  api.addFiles('stripe-stub.js');
});