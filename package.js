Package.describe({
  name: 'c9s:nsq',

  version: '0.14.6_1',

  // Brief, one-line summary of the package.
  summary: 'NSQ client actually written in javascript',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/c9s/meteor-nsq.git',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "nsq.js": "0.14.6"
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.2');
  api.use('ecmascript');
  api.mainModule('nsq.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ecmascript');
  api.use('c9s:nsq');
  api.mainModule('nsq-tests.js', 'server');
});
