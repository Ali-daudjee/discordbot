const {Client, GatewayIntentBits} = require('discord.js');
//const {token} = require('./config.json');
require("dotenv").config();
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
client.once('ready' , () => {
    console.log('Ready')
})

const commandHandler  = require("./commandhandler");

client.on('messageCreate' , commandHandler);
// for tic tac toe make a "won by:" table to show what you or bot has won by and how many times has each player/bot won by
client.login(process.env.BOTTOKEN);