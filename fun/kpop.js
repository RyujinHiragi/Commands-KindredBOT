const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "kpop",
  category: "fun",
  description: "Obtén algunas imágenes de cantantes de kpop con nombres.",
  run: async (client, message, args) => {
    
    let data = await random.getKpop()
    message.channel.send(data)
    
  }
}