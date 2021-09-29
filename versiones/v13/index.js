const fs = require('fs');
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const { token, prefix, ownerId, colorP } = require('./config.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
	console.log('Client Ready!');
});

client.slashes = new Collection();
client.comandos = new Collection()

const commandFolders = fs.readdirSync('./slashes');
for (const folder of commandFolders) {
const commandFiles = fs.readdirSync(`./slashes/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./slashes/${folder}/${file}`);
  client.slashes.set(command.data.name, command)
}
}

// MessageCreate
client.on('messageCreate', (message) => {
	if (!message.content.toLowerCase().startsWith(prefix)) return; 
	if (message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift();

  let cmd = client.cmds.find((c) => c.name.toLowerCase() === command || c.alias && c.alias.includes(command));
  if(cmd){
  cmd.execute(client, message, args)
	}

  client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const command = client.slash.get(interaction.commandName);
	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: '¡Hubo un error al ejecutar este comando!', ephemeral: true });
	}
});
	
	client.login(token)
