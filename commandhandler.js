const ping = require('./commands/ping.js');
const gif = require('./commands/gif.js');
// const {Client, GatewayIntentBits} = require('discord.js');
// const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
const commandLookup = {
    ping, //enhanced object literals where object property and value have same name, instead of ping : ping where ping (left) 
         // is the property and ping (right) is the value, you can just put the same in one being ping
    gif
}
module.exports = async function (message) {  
    // if(message.author.id === client.user.id){
    // return;
    // }
    let commandArr = message.content.split(" ");  
    let command = commandArr.shift();
    if (command.charAt(0) === "!"){ //validates command
        command = command.substring(1);
        commandLookup[command](message, commandArr);
    }
    // if(commandArr[0] === "ping") {
    //     message.reply("pong");
    // }
    // if(commandArr[0] === "!gif"){
        
    // }
}