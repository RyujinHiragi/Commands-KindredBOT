
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'queue', 
    aliases: ['q'], 
    category: 'Music',
    description: 'Le brinda información sobre la cola del servidor.', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`¡Necesitas estar en un vc para ejecutar este comando!`)
            if (!voice_channel) return message.channel.send(embed);
            let queue = client.player.getQueue(message);
            if(queue)
            message.channel.send('Cola:\n'+(queue.songs.map((song, i) => {
                return `${i === 0 ? 'Jugando ahora' : `#${i+1}`} - ${song.name} | ${song.author}`
            }).join('\n')));
    }
}