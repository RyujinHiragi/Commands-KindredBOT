const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stop', 
    category: 'Music',
    description: 'Borra la cola y deja el vc', 
    aliases: ['st'], 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`¡Necesitas estar en un vc para ejecutar este comando!`)
            if (!voice_channel) return message.channel.send(embed);
            let isDone = client.player.stop(message);
            const stop = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription('¡La música se detuvo y se despejó la cola!')
            if(isDone)
            message.channel.send(stop);
    }
}