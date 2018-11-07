/*
BOT MADE BY T3TR3X#7648
------------------------
Removal of credit is not allowed, If you take credit of this bot for your own good then
a scam report will be opened on you. Be respectful and leave my credit where it belongs.
*/
const Discord = require('discord.js');
const conf = require("../config")

exports.run = (bot, message, args, helpers) => {
  let id = args[0];
  let chan = bot.channels.get(id);
  if(chan) {
    let desc = args.slice(1).join(" ");
    chan.send(desc)
  } else {
    return message.reply("Channel Is invalid.");
  }
}
