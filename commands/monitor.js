/*
BOT MADE BY T3TR3X#7648
------------------------
Removal of credit is not allowed, If you take credit of this bot for your own good then
a scam report will be opened on you. Be respectful and leave my credit where it belongs.
*/
const Discord = require('discord.js');
const conf = require("../config")
//DELETE FROM `jes` WHERE id = 476806655183683596

exports.run = (bot, message, args, helpers) => {
  if(args[0] == "add") {
    if(args[1]) {
      let id = args[1];
      if (bot.channels.get(id)) {
            let name = bot.channels.get(id).name;
            message.guild.createChannel(name, 'text')
            .then(c => {
              helpers.connection.query("INSERT INTO jes (id, guild, logging) VALUES ('"+id+"','"+message.guild.name+"','"+c.id+"')", function (err, rows, result) {
                if(err) { console.log(err); throw err; } else {
              helpers.sendEmbed(c, "Channel Added", [
                {
                  name: "Channel <#"+id+">",
                  value: "Is successfully being monitored now!"
                }
              ])
            }
          });
        })
      } else {
        return message.reply("Channel ID provided couldn't be found.");
      }
    } else {
      return message.reply("Provide ID: `monitor add <CHANNELID>`");
    }
  } else if(args[0] == "remove") {
    if(args[1]) {
      let id = args[1];
      if (bot.channels.get(id)) {
        helpers.connection.query("SELECT logging FROM jes WHERE id = "+id, function (err, rows, result) {
        helpers.connection.query("DELETE FROM jes WHERE id = "+id, function (err, result) {
          if(err) { console.log(err); throw err; } else {
            console.log(rows[0].logging)
            bot.channels.get(rows[0].logging).delete();
            helpers.sendEmbed(message.channel, "Channel Removed", [
              {
                name: "Channel <#"+id+">",
                value: "Is successfully removed and is not being monitored."
              }
            ])
          }
        })
      })
      } else {
        return message.reply("Channel ID provided couldn't be found.");
      }
    } else {
      return message.reply("Provide ID: `monitor remove <CHANNELID>`");
    }
  } else if(args[0] == "list") {
    helpers.connection.query("SELECT id FROM jes", function (err, rows, result) {
      if(err) { console.log(err); throw err; } else {
        if(!args[1]) { return message.reply("There are "+rows.length+" active channels.")}
        let i = args[1];
        if(!rows[i]) {
          message.reply("There aren't that many rows, There are only "+rows.length)
        } else {
          message.channel.send(rows[i].id)
        }
      }
    })
  } else {
    helpers.sendEmbed(message.channel, "Monitor Help", [
      {
        name: "!monitor add <channelid>",
        value: "Begin monitor <ChannelID>",
        inline: true,
      },
      {
        name: "!monitor remove <channelid>",
        value: "Remove the monitor on <ChannelID>",
        inline: true,
      },
      {
        name: "!monitor list",
        value: "Monitor status",
        inline: true,
      }
    ])
  }
}
