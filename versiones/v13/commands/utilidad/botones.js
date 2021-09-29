const Discord = require("discord.js");
const { Client, MessageEmbed, Intents, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");
const db = require('quick.db')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });


module.exports = {
  name: "botones",
  alias: [],

async execute (client, message, args) {
  const embed = new MessageEmbed()
  .setAuthor('Soy un author', message.author.displayAvatarURL({ dynamic:true}))//el dynamic es para que si el avatar es animado, lo mande animado
  .setDescription('Embed de botones')
  .setColor('RANDOM')
  .setTimestamp()//para poner la fecha cuando el cmd se ejecuto
const botones = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('azul')//el id del boton, con lo que se ejecutara una interaccion
					.setLabel('Boton 1')//el nombre del boton
					.setStyle('PRIMARY'),//estilo del boton (PRIMARY > color azul)
			)
      .addComponents(
				new MessageButton()
					.setCustomId('gris')//el id del boton, con lo que se ejecutara una interaccion
					.setLabel('Boton 2')//el nombre del boton
					.setStyle('SECONDARY'),//estilo del boton (SECONDARY > color gris)
			)
      .addComponents(
				new MessageButton()
					.setCustomId('verde')//el id del boton, con lo que se ejecutara una interaccion
					.setLabel('Boton 3')//el nombre del boton
					.setStyle('SUCCESS'),//estilo del boton (SUCCESS > color verde)
			)
      .addComponents(
				new MessageButton()
					.setCustomId('rojo')//el id del boton, con lo que se ejecutara una interaccion
					.setLabel('Boton 4')//el nombre del boton
					.setStyle('DANGER'),//estilo del boton (DANGER > color rojo)
			)
      .addComponents(
				new MessageButton()
					.setURL('https://vantweb.ga')//aqui no se usa un custom id, si no, un link
					.setLabel('Boton 5')//el nombre del boton
					.setStyle('LINK'),//estilo del boton (LINK > color gris que te lleva a un link <no se puede poner otro color para el link :3>)
			);
      const botones2 = new MessageActionRow()
      	.addComponents(
				new MessageButton()
					
          .setCustomId('desabilitado')
					.setLabel('Boton 6')//el nombre del boton
					.setStyle('SECONDARY')//estilo del boton (este como es un disabled, no importara el color, solo ponlo y ya)
          .setDisabled(true)//aqui no se usa un custom id, si no, un link
			);
      const msg = await message.reply({ content: `mensaje normal`, embeds: [embed], components: [botones, botones2] })

const filter = i => i.user.id === message.author.id;

      const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

collector.on('collect', async i => {
	if (i.customId === 'azul') {
    await i.deferUpdate();
		await msg.edit({ content: '¡Se hizo clic en un botón!', components: [botones, botones2] });
	}
  if (i.customId === 'gris') {
    await i.deferUpdate();
		await msg.edit({ content: '¡Se hizo clic en otro botón! (2)', components: [botones, botones2] });
	}
  if (i.customId === 'verde') {
    await i.deferUpdate();
		await msg.edit({ content: '¡Se hizo clic en otro botón! (3)', components: [botones, botones2] });
	}
  if (i.customId === 'rojo') {
    await i.deferUpdate();
		await msg.edit({ content: '¡Se hizo clic en otro botón! (4)', components: [botones, botones2] });
	}
});
}
}
