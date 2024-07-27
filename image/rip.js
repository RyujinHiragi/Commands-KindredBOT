const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "rip",
  aliases: ["died", ""],
  category: "Image",
  description: "Muestra la creación de RIP con el avatar del usuario.",
  usage: "rip <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Descansa en Paz")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/rip?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};