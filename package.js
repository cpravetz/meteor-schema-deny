Package.describe({
  name: "aldeed:schema-deny",
  summary: "Deny inserting or updating certain properties through schema options",
  version: "4.0.2",
  documentation: '../../README.md',
  git: "https://github.com/aldeed/meteor-schema-deny.git"
});

Package.onUse(function(api) {
  api.versionsFrom(['2.8.1', '3.0']);
  api.use('aldeed:collection2');
  api.use('aldeed:simple-schema');
  api.use('ecmascript');

  api.mainModule('package/deny/deny.js');
});
