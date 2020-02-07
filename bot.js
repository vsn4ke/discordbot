const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command.js')


client.on('ready', () => {
    client.user.setActivity('conquérir le monde')
})

client.on('message', (receivedMessage) => {
    if(receivedMessage.author == client.user){
        return
    }

    receivedMessage.react('\u{1F922}')
    if(receivedMessage.content.startsWith('!')){
        command.process(receivedMessage)
    }

})

client.login(config.bot_token)