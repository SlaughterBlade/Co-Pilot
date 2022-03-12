/* eslint-disable no-unused-vars */
const Command = require('../structures/command.js');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = new Command({
	name: 'togetherdev',
	aliases: ['tdev', 'partydev', 'partygamesdev'],
	description: 'Discord Together Dev Version!',
	permission: 'SEND_MESSAGES',
	async run(message, args, client, slash) {
		if(!message.member.voice.channel) {return message.reply({ embeds: [{ description: 'You must be in a voice channel.', color: 0x000000 }], ephemeral: true });}

		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('togetherdev')
					.setPlaceholder('Choose an activity')
					.setMinValues(1)
					.setMaxValues(1)
					.addOptions([
						{
							label: 'PN Dev',
							value: '763133495793942528',
						},
						{
							label: 'Watch Together Dev',
							value: '880218832743055411',
						},
						{
							label: 'Doodle Crew Dev',
							value: '878067427668275241',
						},
						{
							label: 'Word Snacks Dev',
							value: '879864010126786570',
						},
						{
							label: 'Sketchy Artist Dev',
							value: '879864104980979792',
						},
						{
							label: 'Decoders Dev',
							value: '891001866073296967',
						},
						{
							label: 'CG 2 Dev',
							value: '832012586023256104',
						},
						{
							label: 'CG 3 Dev',
							value: '832012682520428625',
						},
						{
							label: 'CG4 Dev',
							value: '832013108234289153',
						},
						{
							label: 'Putt Party Dev',
							value: '910224161476083792',
						},
					]),
			);
		message.reply({
			embeds: [
				{
					author: {
						name: 'Discord Together Dev',
						iconURL: message.guild.iconURL(),
					},
					description: 'Choose a dev activity below!',
					footer: {
						text: 'You must be in a voice channel and on a desktop to use this feature.',
					},
					color: 0x44b868,
				},
			],
			components: [row],
		});
	},
});