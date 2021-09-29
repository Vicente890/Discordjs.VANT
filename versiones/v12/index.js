// Base para crear tu bot version 12
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const config = require('config.js')
const { token } = require('config.js')
const prefix = config.prefix;

const fs = require('fs')

// handler con subcarpetas
client.comandos = new Discord.Collection()
//importante poner los comandos en subcarpetas osea: /comandos/subcarpeta/archivo.js
const commandFolders = fs.readdirSync('./comandos');
for (const folder of commandFolders) {
const commandFiles = fs.readdirSync(`./comandos/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./comandos/${folder}/${file}`);
  client.comandos.set(command.name, command)
}
}


client.on('ready', () => {
   console.log(`Estoy listo!`);
});

client.on('message', (message) => {
//esto previene que no se active por el mismo y que un bot no pueda activar los comandos
if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;

//zona del prefijo

const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


//comandos

  if(command === 'ping'){
  message.channel.send('Pong! ' + client.ws.ping)
  }
  // aqui para que sirva el handler
let cmd = client.test.find((c) => c.name.toLowerCase() === command || c.alias && c.alias.includes(command));
if(cmd){
  cmd.execute(client, message, args)
}

});

client.login(token);
