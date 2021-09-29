const Discord = require("discord.js");
const { Client, MessageEmbed, Intents, MessageActionRow, MessageSelectMenu } = require("discord.js");
const db = require('quick.db')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });


module.exports = {
  name: "help",
  alias: [],

execute (client, message, args){
  try{
const embed = new MessageEmbed()
.setAuthor('Help', message.author.displayAvatarURL())
.setDescription(`Bienvenido a mi lista de comandos ${message.author}\nAqui podras encontrar todos mis comandos :D`)
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
                        emoji: '🍇',
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
                        value: 'otroxd',
                        emoji: '💙',
                    }
                ]),
        );
	message.reply({ components: [row], embeds: [embed] });
  } catch (e) {
    message.reply('Ocurrion un error! ' + e)
  }
}
}
