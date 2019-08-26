const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});

const fs = require('fs');
const commandsList = (fs.readFileSync('./storage/commands.txt', 'utf8'));
var modBot = require('discord-moderator-bot')

//moderation
modBot(token, prefix)


//

//Ready State

client.once('ready', () => {
    console.log('Guardian X is online');
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online !`)
    bot.user.setActivity("My Prefix is //", {type: "WATCHING"});
})

//

//command testing

client.on('message', message => {
    if(message.content === `//ping`) {
        message.channel.send('PONGG.');
    } 
    
    else if (message.content === `beep`) {
        message.channel.send('BOOOP.');
    } 
    
    else if (message.content === '//avatar') {
        message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
    }

    else if (message.content === '//help') {
        message.channel.send(commandsList)
    }

    else if (message.content === 'lmao') {
        message.channel.send('LMAO :joy: :joy: I CANnoT STOP LAUGHING')
    }
})

//

client.login(token);