const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "neko",
  category: "Image",
  description: "Obtener algunas imágenes de Neko",
  run: async (client, message, args) => {
    
    let data = await random.getNeko()
    message.channel.send(data)
    
  }
}