/*
BOT MADE BY T3TR3X#7648
------------------------
Removal of credit is not allowed, If you take credit of this bot for your own good then
a scam report will be opened on you. Be respectful and leave my credit where it belongs.
*/
const Discord = require('discord.js');
const conf = require("../config")

exports.run = (bot, message, args, helpers) => {
  helpers.sendEmbed(message.channel, "Monitor Help", [
    {
      name: "!monitor",
      value: "Monitoring Settings",
      inline: true,
    },
    {
      name: "!say",
      value: "Global Messages.",
      inline: true,
    }
  ])
}
