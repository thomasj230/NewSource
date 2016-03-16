Package.describe({
  name: 'newsource:profiles',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'telescope:core@0.25.7',
    'telescope:theme-base@0.25.7'
  ]);

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);



  api.addFiles([
    'i18n/en.i18n.json',
    'i18n/fr.i18n.json'
  ], ['client', 'server']);
});
