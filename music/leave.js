const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'leave',
    aliases: [], 
    category: 'Music',
    description: '¡Deja el canal de voz!', 
        
        run: async (client, message, args) => {
            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`Necesitas es`)
            if(!voiceChannel) return message.channel.send(embed)
            voiceChannel.leave()
            message.react('')
              
          }
}