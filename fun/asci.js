const discord = require("discord.js");
const figlet = require("figlet"); 

module.exports = {
    name: "ascii",
    aliases: [],
    category: "fun",
    usage: "ascii <text>",
    description: "Devuelve el texto proporcionado en formato ascii.",
    run: async (client, message, args) => {

   let text = args.join(" ");
   if(!text) {
return message.channel.send(`¡Proporcione texto para la conversión ascii!`)
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send(`¡Ingrese texto que tenga 20 caracteres o menos porque la conversión no será buena!`)
}
        
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

    }
};
