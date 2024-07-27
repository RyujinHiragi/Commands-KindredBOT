const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("Lo siento, necesitas permisos");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Por favor mencione el canal primero.")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Welcome Channel is seted as ${channel}`)
  }
}