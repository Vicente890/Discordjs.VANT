const Discord = require("discord.js");
const { Client, MessageEmbed, Intents } = require("discord.js");
const db = require('quick.db')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });


module.exports = {
  name: "ping",
  alias: [],

execute (client, message, args){

const ping = new MessageEmbed()//el nombre de este const no importa, puedes ponerle como quieras
.setAuthor(`¡Mi ping!`, interaction.client.user.displayAvatarURL())
.setDescription("**🤖 `|` Bot**: "+ Math.floor(interaction.createdTimestamp - Date.now()) +"\n**🏐 `|` Api**: " + interaction.client.ws.ping)
.setColor('D978BC')
message.channel.send({ embeds: [ping] })
}
}
