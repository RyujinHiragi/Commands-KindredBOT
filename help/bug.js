//Si lo va a utilizar cambie las cosas porque si no los mensajes de error me llegan a mi xdddd

const discord = require("discord.js");
module.exports = {
  name: "bug",
  category: "moderation",
  args: true,
  description:
    "Por favor especifique el error. Ejemplo:\n`el punzonado no funciona. No menciona al usuario al que estoy intentando golpear.`",
  usage:
    "Por favor especifique el error. Ejemplo:\n`el punzonado no funciona. No menciona al usuario al que estoy intentando golpear.`",
  run: async (client, message, args) => {
    
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