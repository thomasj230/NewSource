Template.ns_post_vote.helpers({
  isLiked: function () {
    var user = Meteor.user();
    return user && user.hasUpvoted(this);
  }
});
