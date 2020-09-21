const Discord = require('discord.js')
const config = require('config.js')
 
const client = new Discord.Client()
 
client.on('ready', () => {
  console.log('봇이 켜졌습니다.')
})
 
client.on('message', (message) => {
  if(message.channel.type == 'dm') return
  if(!message.content.startsWith(config.prefix)) return
 
  if(message.content.startsWith(config.prefix + 'ping')) {
    message.channel.send(client.ping + ' ms')
  }
})
 
client.login(config.token)

    
 
