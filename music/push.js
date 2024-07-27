const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pause',
    aliases: ['paus'], 
    category: 'Music',
    description: 'pausar la cola', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`¡Necesitas estar en un vc para ejecutar este comando!`)
            if (!voice_channel) return message.channel.send(embed);
            let song = client.player.pause(message);
            const pause = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`**${song.name}** ¡Estaba en pausa!`)
            if(song) 
            
            message.channel.send(pause);
    }
}