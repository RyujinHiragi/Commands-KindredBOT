
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "slap",
  aliases: ["batmanslap", "slp"],
  category: "Image",
  description: "¡Devuelve una imagen de bofetada!",
  usage: "Slap <Mention Or ID> | <Text>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!Member) return message.channel.send("Por favor menciona al miembro o coloca su ID");
   
    const Other = args.slice(1).join(" ") || "No seas gay";
    if (Other.length > 50) return message.channel.send("Characters Limit Reached - 50!");

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/batmanslap?text1=bruh&text2=${Other}&batman=${message.author.avatarURL({ format: "png" })}&robin=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
