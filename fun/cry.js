const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "cry",
  category: "fun",
  description: "Llorar con gif",
  run: async (client, message, args) => {
    
    let data = await random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`Por favor habla con ${message.author.username} estan llorando`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};