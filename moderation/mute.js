const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  aliases: ["mutes", "muted"],
  category: "moderation",
  description: "muet",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Lo siento, necesitas permiso para silenciar a alguien.");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("No tengo permiso para silenciar");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("\```Por favor mencione a los miembros para silenciar\```");
    }
    if (user.id === message.author.id) {
      return message.channel.send("No puedo silenciarte porque eres el autor del mensaje.");
    }
    let reason = args.slice(1).join("");

    if (!reason) {
      return message.channel.send(" \``` Por favor da alguna razón para silenciar\``` ");
    }

    const vrole = user.roles.cache

    let muterole = message.guild.roles.cache.find(x => x.name === "muted");

    if (!muterole) {
      return message.channel.send("\```Por favor cree un nombre de rol llamdo muted\``` ");
    }
    
    await user.roles.remove(vrole);
    await user.roles.add(muterole);

    await message.channel.send(
      `Te silenciaron ${message.mentions.users.first().username} por ${reason}`
    );

    user.send(`Te silenciaron ${message.guild} por ${reason}`
    );
  }
};
