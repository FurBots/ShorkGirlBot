const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./utils/config.json');

//Command Const Check
const { ping } = require('./commands/moderation/ping.js');
const { kick, ban } = require('./commands/moderation/kickban.js');
const { welcome } = require('./auto/welcome/welcome.js');
const { help } = require('./commands/help/help.js');
const { hug, pat, kiss } = require('./commands/interaction/actions.js')
const { Gilgamesh } = require('./commands/games/civilization/leaderinfo.js')

//Admin Commands
bot.on('message', async msg => {
  if (msg.author.bot) return;

  var prefix = '-'
  if (msg.content.substring(0, prefix.length) != prefix) return;

  var args = msg.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  switch (command)
    {
      //THE HELP COMMAND
      case "commands":
        help(msg);
      break;

      //MAKES SURE THE BOT IS ONLINE
      case "ping":
        ping(msg);
      break;

      //KICK A MEMBER
      case "kick":
      var mention = msg.mentions.users.first()
      var member = msg.guild.member(mention)
        kick(msg, member);
      break;

      //BAN A MEMBER
      case "ban":
      var mention = msg.mentions.users.first()
      var member = msg.guild.member(mention)
        ban(msg, member)
      break;
    }
  });

//Interaction Commands
bot.on('message', async msg => {
  if (msg.author.bot) return;

  var prefix = '-'
  if (msg.content.substring(0, prefix.length) != prefix) return;

  var args = msg.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  switch (command)
    {
      case "hug":
        hug(msg);
      break;

      case "pat":
        pat(msg);
      break;

      case "kiss":
        kiss(msg);
      break;
    }
  });

//CIV COMMANDS
bot.on('message', async msg => {
  if (msg.author.bot) return;

  var prefix = '-'
  if (msg.content.substring(0, prefix.length) != prefix) return;

  var args = msg.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  switch (command)
    {
      case "civ leader gilgamesh":
        Gilgamesh(msg);
      break;
    }
  });

//Welcome Message
bot.on('guildMemberAdd', member => {
  welcome(member);
});

//Bot Ready-Check
bot.on('ready', () => {
  console.log("I'm here");
});

//Bot Login Token
bot.login(config.token);
