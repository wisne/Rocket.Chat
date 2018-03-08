Meteor.methods({
	'livechat:registerGuest'({ token, name, email,saloon, department } = {}) {
		const userId = RocketChat.Livechat.registerGuest.call(this, {
			token,
			name,
			email,
			saloon,
			department
		});

		// update visited page history to not expire
		RocketChat.models.LivechatPageVisited.keepHistoryForToken(token);

		return {
			userId
		};
	}
});
