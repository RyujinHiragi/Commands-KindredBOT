const db = require("quick.db")

module.exports = {
  name: "setmodlog",
  description: "set mod log channel",
  category: "moderation",

 run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("** No tienes los permisos requeridos - [ADMINISTRATOR]**")
    if (!args[0]) {
      let b = await db.fetch(`modlog_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**El canal Modlog configurado en este servidor es\`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**Ingrese un nombre de canal o ID para configurar**"
        );
    }
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**Ingrese un canal de texto válido**");

        try {
            let a = await db.fetch(`modlog_${message.guild.id}`)

            if (channel.id === a) {
                return message.channel.send("**Este canal ya está configurado como canal Modlog**")
            } else {
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Modlog Channel Set!**")
                db.set(`modlog_${message.guild.id}`, channel.id)

                message.channel.send(`**El canal Modlog se ha configurado correctamente en \`${channel.name}\`!**`)
            }
        } catch {
            return message.channel.send("**Error - `Missing Permissions Or Channel Is Not A Text Channel!`**");
        }
    }
};