const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'volume', 
    category: 'Music',
    description: 'Establecer el volumen del bot en el vc.', 
    aliases: ['setvolume'], 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`¡Necesitas estar en un vc para ejecutar este comando!`)
            if (!voice_channel) return message.channel.send(embed);
            let isDone = client.player.setVolume(message, parseInt(args[0]));
            const volume = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`Volumen establecido en ${args[0]}%!`)
            if(isDone)
            message.channel.send(volume);
    }
}