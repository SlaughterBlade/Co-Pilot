/* eslint-disable prefer-const */
const Command = require('../structures/command.js');

module.exports = new Command({
	name: 'kick',
	aliases: ['k'],
	description: 'Kick member by ID',
	permission: 'KICK_MEMBERS',
	options: [
		{ description: 'Member Id', name: 'id', required: true, type: 3 },
	],
	async run(message, args, client, slash) {
		if (args.length === 0) {
			return message.reply('Please enter member id');
		}

		try {
            const member = message.mentions.members.first() || await message.guild.members.fetch(args[0]);
				member
				.kick()
				.then((member) => message.channel.send(`${member} has been kicked.`))
				.catch((err) => message.channel.send('Bot cannot kick the user :('));
        }
        catch (err) {
			message.channel.send('not found member');
        }

	},
});