Meteor.methods({
	bulkImport(posts) {
		check(posts, Match.Any);
		if (Meteor.isClient) {
			console.log('start import');
		}

		if (Meteor.isServer) {
			_.each(posts, post => {
				// post.userId = "6jE5RWkHNuWnBmyDE"; // xavier id on newsource.fr
				post.userId = "FJsdjSTwr6ceqf3a5" // xavier id on localhost:3000
				try {
					Posts.submit(post);
					console.log('import : ', post.title);
				} catch(e) {
					console.log('already imported : ', post.title);
				}
			});
		}
	}
});