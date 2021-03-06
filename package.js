Package.describe({
  name: 'fabienb4:materialize-components',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'Easy to use templates for Materialize.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fabienb4/meteor-materialize-components.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'templating',
  ], 'client');

  api.use([
    'mongo',
    'materialize:materialize@0.97.0',
    'aldeed:simple-schema@1.3.3'
  ], ['client', 'server']);

  api.imply([
    'materialize:materialize',
    'aldeed:simple-schema'
  ], ['client', 'server']);

  api.addFiles([
    'materialize_ext.js'
  ], ['client', 'server']);

  // collections
  api.addFiles([
    'collections/_.js',
    'collections/cards.js',
    'collections/collapsibles.js',
    'collections/collections.js',
    'collections/parallaxes.js',
    'collections/sliders.js'
  ], ['client', 'server']);

  // schemas
  api.addFiles([
    'schemas/cards.js',
    'schemas/collapsibles.js',
    'schemas/collections.js',
    'schemas/parallaxes.js',
    'schemas/sliders.js'
  ], ['client', 'server']);

  // templates
  api.addFiles([
    // basic components
    'components/basic/badge.html',
    'components/basic/button.html',
    'components/basic/dropdown.html',
    'components/basic/icon.html',
    'components/basic/input.html',
    'components/basic/modal.html',
    'components/basic/navbar.html',
    'components/basic/preloader.html',
    'components/basic/progress.html',
    'components/basic/searchbar.html',
    'components/basic/tabs.html',
    'components/basic/button.js',
    'components/basic/icon.js',
    'components/basic/modal.js',
    'components/basic/navbar.js',
    'components/basic/preloader.js',
    'components/basic/progress.js',
    'components/basic/tabs.js',
    // advanced components
    'components/advanced/card.html',
    'components/advanced/collapsible.html',
    'components/advanced/collection.html',
    'components/advanced/parallax.html',
    'components/advanced/slider.html',
    'components/advanced/collapsible.js',
    'components/advanced/parallax.js',
    'components/advanced/slider.js',
    // custom components
    'components/custom/loading-screen.html'
  ], 'client');

  api.export(['Components' ], ['client', 'server']);
});
