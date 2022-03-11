const { SlashCommandBuilder } = require('@discordjs/builders');


// Check the bot ms
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Test bot latency'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
	},
};