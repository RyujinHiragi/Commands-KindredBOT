const discord = require("discord.js");
module.exports = {
  name: "bug",
  category: "moderation",
  args: true,
  description:
    "Please specify the bug. Example:\n`punch isn't working. It isn't mentioning the user I'm trying to punch`",
  usage:
    "Please specify the bug. Example:\n`punch isn't working. It isn't mentioning the user I'm trying to punch`",
  run: async (client, message, args) => {
    // again make this fit your command handler style 😀
    args = args.join(" ");
    const channels = message.channel;
    let check;
    if (args[0] === "temp") {
      check = "true";
    } else if (args[1] === "temp") {
      check = "true";
    } else {
      check = "false";
    }
    let check2;
    if (args[0] === "temp") {
      check2 = "86400";
    } else if (args[1] === "temp") {
      check2 = "86400";
    } else {
      check2 = "0";
    }
    message.reply(
      "¡Gracias por enviar un error! Revisaremos tu informe\nTe enviaremos un mensaje privado cuando se resuelva este error\nactiva también todos los permisos de mensajes directos"
    );
    channels
      .createInvite({
        temporary: `${check}`,
        maxAge: `${check2}`,
        maxUses: 0,
        reason: `Requested By : ${message.author.username}`
      })
      .then(InviteCode =>
        client.channels.cache.get("1071186394816446525").send(
          new discord.MessageEmbed()
            .setTitle("New Report Bug")
            .addField(
              "User Name",
              `**${message.author.username}#${message.author.discriminator}**`
            )
            .addField("ID User", message.author.id)
            .addField("Reported", args)
            .addField("Server Name", `**${message.guild.name}**`)
            .addField("ID Server", `**${message.guild.id}**`)
            .addField("USER SEARCH", `**[Click Here](https://discordapp.com/users/${message.guild.id}/)**`)
            .addField(`Link Server`, `https://discord.gg/${InviteCode.code}`)
            .setColor("RANDOM")
        )
      );
  }
};