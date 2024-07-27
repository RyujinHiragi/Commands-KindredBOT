const db = require("quick.db");

module.exports = {
  name: "unmute",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Lo sentimos, pero no tienes permiso para reactivar el sonido de nadie."
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("No tengo permiso para gestionar roles.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Por favor mencione el miembro al que desea reactivar el silencio.");
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send("Dado que el usuario no tiene la función de silencio, ¿qué se supone que debo hacer?");
    }

    user.roles.remove(muterole)

    await message.channel.send(`**${message.mentions.users.first().username}** is now unmuted`);

    user.send(`Ahora no estás silenciado **${message.guild.name}**`);
    
    message.delete()
  }
};
