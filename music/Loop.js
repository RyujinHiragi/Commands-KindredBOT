const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'loop', 
    aliases: [], 
    category: 'Music',
    description: 'hacer un bucle en la cola', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`¡Necesitas estar en un vc para ejecutar este comando!`)
            if (!voice_channel) return message.channel.send(embed);
            
            let status = client.player.setQueueRepeatMode(message, true);
            const loop = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`¡La cola se repetirá indefinidamente!`)
            if(status === null)
            return;
            message.channel.send(loop);
    }
}