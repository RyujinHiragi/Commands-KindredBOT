const superagent = require("snekfetch");
const Discord = require('discord.js')



module.exports = {
  name: "dog",
  category: "fun",
description: "Envía una imagen de perro aleatoria",
usage: "[command]",
run: async (client, message, args) => {

superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("<a:dog1:730389376210829344>")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};