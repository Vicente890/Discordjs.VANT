const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Mi lista de comandos!'),
	async execute(interaction) {

const embed = new MessageEmbed()
.setAuthor('Help', interaction.author.displayAvatarURL())
.setDescription(`Bienvenido a mi lista de comandos ${interaction.author}\nAqui podras encontrar todos mis comandos :D`)
.setColor('RANDOM')
 const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('menu')
                .setPlaceholder('💣 | Categorias de comandos')
                .addOptions([
                    {
                        label: 'General',
                        description: 'Descripcion de la seleccion',
                        value: 'general',
                        emoji: 🍇',
                    },
                    {
                        label: 'Owners',
                        description: 'Descripcion de la seleccion',
                        value: 'owners',
                        emoji: '👑',
                    },
                    {
                        label: 'diversion',
                        description: 'Descripcion de la seleccion',
                        value: 'diversion',
                        emoji: '👀',
                    },
                    {
                        label: 'Otro',
                        description: 'Descripcion de la seleccion',
                        value: 'otro',
                        emoji: '💙',
                    },
                    {
                     label: 'Otro 2',
                        description: 'la verdad no se cuanto es el limite para las opciones pero si jala uwu',
                        value: 'otro2',
                        emoji: '💙',
                    }
                ]),
        );
		const mensaje = await interaction.reply({ ephemeral: false, embeds: [embed], components: [] });
	},
};
