# Como ya mencionado en la v12, esta debe tener una base para su comando, y esa seria esta:
&nbsp;
```js
const Discord = require("discord.js");
const { Client, MessageEmbed, Intents, MessageActionRow, MessageSelectMenu } = require("discord.js");
const db = require('megadb')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });


module.exports = {
  name: "",
  alias: [],

execute (client, message, args){
//aqui tu codigo
}
}
```
