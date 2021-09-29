const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responde con mi ping!'),
	async execute(interaction) {

const embed = new MessageEmbed()
.setAuthor(`¡Mi ping!`, interaction.client.user.displayAvatarURL())
.setDescription("**🤖 `|` Bot**: "+ Math.floor(interaction.createdTimestamp - Date.now()) +"\n**🏐 `|` Api**: " + interaction.client.ws.ping)
.setColor('D978BC')
		await interaction.reply({ ephemeral: false, embeds: [embed], components: [] });
	},
};
