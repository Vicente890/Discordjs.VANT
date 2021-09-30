const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('mando lo que quieras que diga!')
    .addStringOption(option => option.setName('mensaje').setDescription('Ingresa un texto').setRequired(true)),//mas opciones para poner, visita: https://guia.aguacate.ml/interacciones/respondiendo-a-comandos-de-barra.html#opciones-de-comando
	async execute(interaction) {
const say = interaction.options.getString('mensaje');
const awa = new MessageEmbed()
.addField(interaction.user.tag + ' Quiere decir algo!', `**${say}**`)
.setColor(`RANDOM`)
interaction.reply({ embeds: [awa] })

	},
};
