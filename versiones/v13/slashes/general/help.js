const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Mi lista de comandos!'),
	async execute(interaction) {

const embed = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a mi lista de comandos ${interaction.user}\nAqui podras encontrar todos mis comandos :D`)
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
		const mensaje = await interaction.reply({ ephemeral: true, embeds: [embed] });
		
		 const filter = i => i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ filter });

    collector.on('collect', async i => {
    if (i.values[0] === 'general') {
    await i.deferUpdate();
    
	    const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 1`)
.setColor('RANDOM')
    mensaje.edit({ embeds: [emb] })
    }

    if (i.values[0] === 'owners') {
    await i.deferUpdate();
    const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 2`)
.setColor('RANDOM')
    mensaje.edit({ embeds: [emb] })
    }
	    
	    if (i.values[0] === 'diversion') {
    await i.deferUpdate();
    
    const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 3`)
.setColor('RANDOM')
    mensaje.edit({ embeds: [emb] })
    }

if (i.values[0] === 'otro') {
    await i.deferUpdate();
    
    const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 4`)
.setColor('RANDOM')
    mensaje.edit({ embeds: [emb] })
    }	    
	    
	if (i.values[0] === 'otro2') {
    await i.deferUpdate();
    
    const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 5`)
.setColor('RANDOM')
    mensaje.edit({ embeds: [emb] })
    }    
	    
    });

	},
};
