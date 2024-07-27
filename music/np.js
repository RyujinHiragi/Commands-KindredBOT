const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'nowplaying', 
    aliases: ['np'], 
    category: 'Music',
    description: 'Da información sobre la canción que se está reproduciendo y su progreso.', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`¡Necesitas estar en un vc para ejecutar este comando!`)
            if (!voice_channel) return message.channel.send(embed);
            let progressBar = client.player.createProgressBar(message, {
                size: 20,
                block: '▬',
                arrow: '🔘'
            

                
            });
            let song = await client.player.nowPlaying(message)
            const bar = new MessageEmbed()
            .setColor('#85b0d2')
            .setTitle(`${song.name}`)
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription(`⋆ Requested by ${message.author}
            \`${progressBar}\``)

            if(progressBar)

            

                
                message.channel.send(bar);
    }
}