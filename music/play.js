const { MessageEmbed } = require("discord.js");
const ytsr = require('ytsr');
module.exports = {
    name: 'play',
    aliases: ['p'], 
    category: 'Music',
    description: 'Tocar una canción en el vc', 
    run: async (client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`Necesitas estar en un canal de voz`)
        if (!voice_channel) return message.channel.send(embed);

        if(client.player.isPlaying(message)) {
            let song = await client.player.addToQueue(message, args.join(' '));

            const added = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`Agregado **${song.name}** a la cola`)


           
            if(song)
                message.channel.send(added);
            return;
        } else {
            let song = await client.player.play(message, args.join(' '));

            const started = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`Empezando reproduccion **${song.name}**`)

            
            if(song)
                message.channel.send(started);
            return;
        }
    }
}