const config = require('../config.json');

module.exports = {
	name: 'ready',
	execute(client) {
		client.user.setActivity(config.activity, { type: config.activityType });
	},
};