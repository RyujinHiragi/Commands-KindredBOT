const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clear', 
    aliases: ['clearqueue', 'clear-queue'], 
    category: 'Music',
    description: 'Limpia la cola',
    run: async (client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('#FF5757')
        .setDescription(`¡Necesitas estar en un vc para ejecutar este comando!`)
        const embed1 = new MessageEmbed()
        .setColor('#85b0d2')
        .setDescription('Se borró la cola!')
        if (!voice_channel) return message.channel.send(embed);
        let isDone = client.player.clearQueue(message);
        if(isDone)
            message.channel.send(embed1);
    }
}