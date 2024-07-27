const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'playlist',
    aliases: ['plist'], 
    category: 'Music',
    description: 'Reproducir una lista de reproducción en el vc', 
    run: async (client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`Necesitas estar en un canal de voz para ejecutar este comando`)
        if (!voice_channel) return message.channel.send(embed);
        
        await client.player.playlist(message, {
            search: args.join(' '),
            maxSongs: -1
        });
    }
}