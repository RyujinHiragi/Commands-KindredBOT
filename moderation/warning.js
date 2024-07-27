const db = require("quick.db");

module.exports = {
  name: "warnings",
  description: "Recibe las advertencias tuyas o de la persona mencionada",
  category: "moderation",
  run: (client, message, args) => {
    const user = message.mentions.members.first() || message.author;

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    message.channel.send(`${user} have **${warnings}** warning(s)`);
  }
};
