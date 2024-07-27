const ownerid = "852219497763045398";

module.exports = {
        name: "getinvite",
        aliases: ['getinv', 'gi'],
        category: "owner",
        description: "Genera una invitación al servidor en cuestión.",
        usage: "[ID | name]",
      
    run: async(bot, message, args) => {
        if (message.author.id === ownerid) {
        let guild = null;

        if (!args[0]) return message.channel.send("Ingrese el nombre del gremio o el ID del gremio donde desea el enlace de invitación.")

        if(args[0]){
            let fetched = bot.guilds.cache.find(g => g.name === args.join(" "));
            let found = bot.guilds.cache.get(args[0]);
            if(!found) {
                if(fetched) {
                    guild = fetched;
                }
            } else {
                guild = found
            }
        } else {
            return message.channel.send("Ese es el nombre del gremio no válido");
        }
        if(guild){
            let tChannel = guild.channels.cache.find(ch => ch.type == "text" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
            if(!tChannel) {
                return message.channel.send("Lo siento, ¡no tengo el permiso CREATE_INSTANT_INVITE allí!"); 
            }
            let invite = await tChannel.createInvite({ temporary: false, maxAge: 0 }).catch(err => {
                return message.channel.send(`${err} has occured!`);
            });
            message.channel.send(invite.url);
        } else {
            return message.channel.send(`\`${args.join(' ')}\` - No estoy en ese servidor.`);
        }
    } else {
        return;
    }
    }

}