const { SlashCommandBuilder } = require('@discordjs/builders');
const { GuildMember } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('remove')
		.setDescription('remove a song from the queue!')
		.addIntegerOption(option => option.setName('number').setDescription('The queue number you want to remove').setRequired(true)),
	async execute(interaction, player) {
		if (!(interaction.member instanceof GuildMember) || !interaction.member.voice.channel) {
			return void interaction.reply({
				content: 'You are not in a voice channel!',
				ephemeral: true,
			});
		}

		if (
			interaction.guild.me.voice.channelId &&
      interaction.member.voice.channelId !== interaction.guild.me.voice.channelId
		) {
			return void interaction.reply({
				content: 'You are not in my voice channel!',
				ephemeral: true,
			});
		}

		await interaction.deferReply();
		const queue = player.getQueue(interaction.guildId);
		if (!queue || !queue.playing) return void interaction.followUp({ content: '❌ | No music is being played!' });
		const number = interaction.options.get('number').value - 1;
		if (number > queue.tracks.length) {return void interaction.followUp({ content: '❌ | Track number greater than queue depth!' });}
		const removedTrack = queue.remove(number);
		return void interaction.followUp({
			content: removedTrack ? `✅ | Removed **${removedTrack}**!` : '❌ | Something went wrong!',
		});
	},
};

