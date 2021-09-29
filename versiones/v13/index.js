const fs = require('fs');
const { Client, Collection, Intents, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const { token } = require('./config.js');
const config = require('./config.js')
const prefix = config.prefix;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
	console.log('Inicie sesion! ' + client.user.tag);
});

client.slashes = new Collection();
client.comandos = new Collection()

const slashFolders = fs.readdirSync('./slashes');
for (const folder of slashFolders) {
const slashFiles = fs.readdirSync(`./slashes/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of slashFiles) {
		const command = require(`./slashes/${folder}/${file}`);
  client.slashes.set(command.data.name, command)
}
}

const commandFolders = fs.readdirSync('./comandos');
for (const folder of commandFolders) {
const commandFiles = fs.readdirSync(`./comandos/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./comandos/${folder}/${file}`);
  client.comandos.set(command.name, command)
}
}

// Evento message
client.on('messageCreate', (message) => {
	if (!message.content.toLowerCase().startsWith(prefix)) return; 
	if (message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift();

  let cmd = client.comandos.find((c) => c.name.toLowerCase() === command || c.alias && c.alias.includes(command));
  if(cmd){
  cmd.execute(client, message, args)
	}

});
//evento interaction create (de slashs)
  client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const command = client.slashes.get(interaction.commandName);
	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: '¡Hubo un error al ejecutar este comando!', ephemeral: true });
	}
});
//evento interaction create (menus)
	client.on('interactionCreate', async interaction => {
  const db = require('quick.db')
	if (!interaction.isSelectMenu()) return;
  

  //filtros
const filter = i => i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ filter });

//collector, donde serviran los menus
    collector.on('collect', async i => {

      //menu 1, (el de help)

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

        //opciones del menu 1 (help)
    if (i.values[0] === 'general') {
      try{
    await i.deferUpdate();
    
	    const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 1`)
.setColor('RANDOM')
    i.editReply({ embeds: [emb], components: [row] })
      } catch (e) {
        const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 1`)
.setColor('RANDOM')
       i.editReply({ embeds: [emb], components: [row]})
      }
    }

    if (i.values[0] === 'owners') {
      try{
    await i.deferUpdate();
    
    const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 2`)
.setColor('RANDOM')
    i.editReply({ embeds: [emb], components: [row] })
    } catch (e) {
      const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 2`)
.setColor('RANDOM')
        i.editReply({ embeds: [emb], components: [row]})
      }
    }
	    
	    if (i.values[0] === 'diversion') {
        try{
    await i.deferUpdate();
    const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 3`)
.setColor('RANDOM')
    i.editReply({ embeds: [emb], components: [row] })
  
    } catch (e) {
      const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 3`)
.setColor('RANDOM')
        i.editReply({ embeds: [emb], components: [row]})
      }
      }

if (i.values[0] === 'otro') {
  try{
    await i.deferUpdate();
    
    const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 4`)
.setColor('RANDOM')
   i.editReply({ embeds: [emb], components: [row] })

   } catch (e) {
     const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 4`)
.setColor('RANDOM')
        i.editReply({ embeds: [emb] , components: [row]})
      }
    }	    
	    
	if (i.values[0] === 'otroxd') {
    try{
    await i.deferUpdate();
    
    const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 5`)
.setColor('RANDOM')
    i.editReply({ embeds: [emb], components: [row] })
    } catch (e) {
      const emb = new MessageEmbed()
.setAuthor('Help', interaction.user.displayAvatarURL())
.setDescription(`Bienvenido a la pagina 5`)
.setColor('RANDOM')
        i.editReply({ embeds: [emb], components: [row]})
      }
    }    
	    
    });

  })
require('./slashes.js');


client.login(token)
