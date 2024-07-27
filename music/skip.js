const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'skip', 
    aliases: ['sk'], 
    category: 'Music',
    description: 'Salta la canción que está sonando.', 
        run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`¡Necesitas estar en un vc para ejecutar este comando!`)
            if(!client.player.isPlaying(message)) {
			message.channel.send('Debe estar sonando radio desconocida para saltar la pista');

			return;
		}

		await client.player.skip(message);

		message.channel.send('Saltado');
	},
};