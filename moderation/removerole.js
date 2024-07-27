const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "removerole",
  aliases: ["rmrole", "-role"],
  category: "moderation",
  description: "Eliminar rol de cualquier usuario",
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`No puedo encontrar al usuario`)
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.reply(`No puedo encontrar el rol`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      .setAuthor(target.user.username, ticon)
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setDescription(`${rrole} rol eliminado de ${target}`)
      .setFooter(`Rol agregado por ${message.author.username}`, aicon)
      .setTimestamp()
      
      await message.channel.send(embed)
      
      target.roles.remove(rrole)
    
  }
}