Package.describe({
  name: "newsource:core",
  summary: "NewSource theme base on Zeiss theme",
  version: "0.2.3",
  git: "https://github.com/TelescopeJS/screenings"
});

Package.onUse(function (api) {

  api.versionsFrom(['1.2.1']);

  api.use([
    'telescope:core@0.25.7',
    'telescope:theme-base@0.25.7'
  ]);

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  api.addFiles([
    'lib/config.js',
    'lib/modules.js',
    'lib/icons.js',
    'lib/views.js',
    'lib/menus.js',
    'lib/colors.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/services.js',
    'lib/server/templates/ns_emailDigest.handlebars',
    'lib/server/templates/ns_emailPostItem.handlebars'
  ], ['server']);

  api.addFiles([

    'lib/client/templates/common/layout.html',
    'lib/client/templates/common/logo.html',
    'lib/client/templates/common/newsletter_banner.html',
    'lib/client/templates/common/newsletter_banner.js',
    'lib/client/templates/common/page.html',
    'lib/client/templates/common/footer_social.html',
    'lib/client/templates/common/footer_social.js',

    'lib/client/templates/post_page/post_page.html',
    'lib/client/templates/post_page/post_page.js',

    'lib/client/templates/posts/post_item.html',
    'lib/client/templates/posts/post_item.js',
    'lib/client/templates/posts/after_post_item.html',
    'lib/client/templates/posts/after_post_item.js',
    'lib/client/templates/posts/post_submit.html',
    'lib/client/templates/posts/post_thumbnail.html',
    'lib/client/templates/posts/post_thumbnail.js',
    'lib/client/templates/posts/post_vote.html',
    'lib/client/templates/posts/post_vote.js',

    'lib/client/templates/nav/user_menu.html',
    'lib/client/templates/nav/user_menu.js',
    'lib/client/templates/nav/views_menu.html',
    'lib/client/templates/nav/views_menu.js',
    'lib/client/templates/nav/categories_menu.html',
    'lib/client/templates/nav/categories_menu.js',
    'lib/client/templates/nav/header.html',
    'lib/client/templates/nav/header.js',
    'lib/client/templates/nav/submit_button.html',

    'lib/client/stylesheets/_comments.scss',
    'lib/client/stylesheets/_global.scss',
    'lib/client/stylesheets/_color.scss',
    'lib/client/stylesheets/_posts_grid.scss',
    'lib/client/stylesheets/_mixins.scss',
    'lib/client/stylesheets/_nav.scss',
    'lib/client/stylesheets/_custom_nav.scss',
    'lib/client/stylesheets/_other.scss',
    'lib/client/stylesheets/_post_page.scss',
    'lib/client/stylesheets/_accounts.scss',
    'lib/client/stylesheets/_materialize.scss',
    'lib/client/stylesheets/screen.scss'

  ], ['client']);

  api.addFiles([
    "i18n/en.i18n.json",
    "i18n/fr.i18n.json"
  ], ["client", "server"]);

});
