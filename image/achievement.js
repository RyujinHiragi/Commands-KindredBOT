const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "achievement",
  description: "Te da un logro",
  aliases: ["ach"],
  category: "Image",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setTitle("MineCraft achievement!")
      .setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`
      );
    message.channel.send(e);
  },
};