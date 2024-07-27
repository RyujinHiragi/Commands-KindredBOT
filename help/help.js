//Aqui tambien cambie todo lo que dice Kindred Bot, le quite la marca de agua para que no lo joda eso 

const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "help",
  description:
    "Obtenga una lista de todos los comandos e incluso conozca todos los detalles de los comandos",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    
   let helpEmbed = new MessageEmbed()
      .setTitle("Kindred Bot Commands")
      .addField(
        "• **ADMINISTRADOR**",
        "```announce, bug, addrole, ban, purge, hackban, kick, lock, mute, removerole, resetwarns, setnick, setmodlog, slowmode, unlock, unmute, voicekick, warn, warnings, setwelcome , nuke```"
      )
      .addField(
        "• **GENERAL**",
        "```servericon , invite , membercount ,  help , serverinfo , leaderboard``` "
      )
      .addField(
        "• **REDES DE MI CREADOR**",
        "```discord, ig```"
      )
      .addField(
        "• **INFO**",
        "```inv, help, invite, invites, badges, botinfo, ping, servericon, snipe, uptime, userinfo``` "
      )
      .addField(
        "• **MUSICA**",
        "```loop, clear, disable-loop, join, leave, nowplaying, play, playlist, pause, queue, resume, shuffle, skip, stop, volume```"
      )
      .addField(
        "• **IMAGEN**",
        "```neko, slap, triggered, avatarfusion, rip``` "
      )
      .addField(
        "• **MODERACION**",
        "```mute , unmute , q no alberto q ya no hay nuke, ```"
      )
      .addField(
        "• **OWNER**",
        "```eval , reload , serverlist , test1```"
      )
      .addField('Important Links ','**[Invite Me]( https://discord.com/oauth2/authorize?client_id=1071186394816446525&scope=bot&permissions=1099511627775)** **• [Support](https://discord.gg/hnt8uVaQ)')
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `Kindred Bot`,
      client.user.displayAvatarURL(),
      message.delete()
    );

      message.channel.send(helpEmbed)

  },
};