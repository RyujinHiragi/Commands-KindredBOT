const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   category: "moderation",
   description: "Bloquea un canal"
}
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("No tienes suficientes permisos")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`ðŸ”’ ${message.channel} ha sido bloqueado`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
