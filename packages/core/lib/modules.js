Telescope.modules.remove("contentTop", "newsletter_banner");
Telescope.modules.remove("postsListTop", "views_menu");
Telescope.modules.remove("postComponents", "post_rank");
Telescope.modules.remove("postComponents", "post_vote");
Telescope.modules.remove("postHeading", "post_domain");
Telescope.modules.remove("postHeading", "post_categories");
Telescope.modules.remove("primaryNav", "categories_menu");

// Telescope.modules.remove("primaryNav", "pages_menu");

// Telescope.modules.remove("secondaryNav", "user_menu");
// Telescope.modules.remove("secondaryNav", "submit_button");
// Telescope.modules.remove("secondaryNav", "notifications_menu");

// Telescope.modules.remove("mobileNav", "notifications_menu");

Telescope.modules.remove("postMeta", "post_author");
Telescope.modules.remove("postMeta", "post_info");
Telescope.modules.remove("postMeta", "post_comments_link");
Telescope.modules.remove("postMeta", "post_admin");

Telescope.modules.remove("profileDisplay", "user_downvoted_posts");
Telescope.modules.remove("footer", "footer_vote");

Telescope.modules.add("postMeta", {
  template: "post_summary",
  order: 10
});

Telescope.modules.add("mobileNav", {
  template: "views_menu",
  order: 6
});

Telescope.modules.add("primaryNav", {
  template: "views_menu",
  order: 2
});

Telescope.modules.add("secondaryNav", {
  template: "nav_footer",
  order: 20
});
Telescope.modules.add("postFooter", {
  template: "post_vote",
  order: 10
},
{
  template: "post_edit_icon",
  order: 30
});
