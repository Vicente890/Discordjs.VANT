const Discord = require("discord.js");
const { Client, MessageEmbed, Intents } = require("discord.js");
const client = new Client();


module.exports = {
  name: "avatar",
  alias: ["av","ava"], //si no tienes ningun alias dejalo vacio, osea, sin "", solo []

execute (client, message, args){
  const user = message.mentions.users.first() || message.author || client.users.cache.fetch(args[0])
  const avatar = user.displayAvatarURL({dynamic:true})
const embed = new MessageEmbed()
.setImage(avatar)
message.channel.send(embed)
}
}
