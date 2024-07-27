module.exports = {
  name: "voicekick",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send(
        "No tengo los permisos adecuados para utilizar este comando"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Mencione al usuario que desea eliminar del canal de voz!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`El usuario no está en ningún canal de voz`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`El usuario ha sido expulsado del canal de voz`)
  }
};