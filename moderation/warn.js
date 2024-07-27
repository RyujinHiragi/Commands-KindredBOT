const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "Deberías tener permisos de administrador para usar este comando."
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Por favor menciona a la persona a quien quieres avisar - warn @mention <razon>"
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("No puedes advertir a los bots");
    }

    if (message.author.id === user.id) {
      return message.channel.send("No puedes advertirte");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        "Como piensas advertir al dueño del servidor"
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "Proporcione una razón para advertir - warn @mention <razon>"
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `Has sido advertido en **${message.guild.name}** for ${reason}`
      );
      await message.channel.send(
        `Has sido advertido **${
          message.mentions.users.first().username
        }** for ${reason}`
      );
    } else if(warnings !== null) {
      
      db.add(`advertencias_${message.guild.id}_${user.id}`, 1);
      
      user.send(`Has sido advertido en **${message.guild.name}**  ${reason}`);
      
      await message.channel.send(`Has sido advertido **${message.mentions.users.first().username}**  ${reason}`);
      
      message.delete
      
    }
  }
};
