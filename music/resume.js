const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'resume', 
    aliases: ['resume'], 
    category: 'Music',
    description: 'Reanudar la canción que estaba pausada.', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`¡Necesitas estar en un vc para ejecutar este comando!`)
            if (!voice_channel) return message.channel.send(embed);
            let song = client.player.resume(message);
            const resume = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`**${song.name}** ¡Se reanudó!`)
            if(song)
            message.channel.send(resume);
    }
}