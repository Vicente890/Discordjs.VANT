const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('./config.js');

const commands = [];
const commandFiles = fs.readdirSync('./slash').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./slash/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

async () => {
	try {
    console.log('Empezando a actuliazar comandos de barra.');
		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log('Comandos de barra listos!');
	} catch (error) {
		console.error(error);
	}
})();
