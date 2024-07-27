const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'shuffle',
    aliases: ['sh'], 
    category: 'Music',
    description: 'Mezclar la cola', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`¡Necesitas estar en un vc para ejecutar este comando!`)
            if (!voice_channel) return message.channel.send(embed);
            let songs = client.player.shuffle(message);
            const shuffle = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription('La cola del servidor fue barajada.')
            if(songs)
            message.channel.send(shuffle);
    }
}