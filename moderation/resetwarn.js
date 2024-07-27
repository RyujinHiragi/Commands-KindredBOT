const db = require("quick.db");

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns", "rsetwarns"],
  category: "moderation",
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "Deberías tener permisos de administrador para usar este comando."
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Deberías tener permisos de administrador para usar este comando.");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Los bots no pueden tener advertencias.");
    }

    if (message.author.id === user.id) {
      return message.channel.send("No puedes restablecer tus advertencias.");
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} no tengo ninguna advertencia`);
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(
      `Todas sus advertencias se restablecen por ${message.author.username} from ${message.guild.name}`
    );
    await message.channel.send(
      `Restablecer todas las advertencias de ${message.mentions.users.first().username}`
    );
  }
};
