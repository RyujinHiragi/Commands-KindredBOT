const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'join',
    aliases: [], 
    category: 'Music',
    description: 'Únete al canal de voz!', 
        run: async (client, message, args) => {
            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`Necesitas estar en un canal de voz para ejecutar este comando`)
            if(!voiceChannel) return message.channel.send(embed)
            voiceChannel.join()
                
          }
}