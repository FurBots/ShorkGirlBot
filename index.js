const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./utils/config.json');

//Command Const Check
const { ping } = require('./commands/moderation/ping.js');
const { kick, ban } = require('./commands/moderation/kickban.js');
const { welcome } = require('./auto/welcome/welcome.js');
const { help, CivHelp } = require('./commands/help/help.js');
const { hug, pat, kiss, hugme, patme, kissme } = require('./commands/interaction/actions.js')
const { Gilgamesh, Alexander, Amanitore, Catherine, Chandragupta, Cleopatra, Cyrus } = require('./commands/games/civilization/leaderinfo.js')

//Commands
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

      //LIST HELP ABOUT WIKIS
      case "wikis":
        CivHelp(msg);
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

      case "hug":
        hug(msg);
      break;

      case "pat":
        pat(msg);
      break;

      case "kiss":
        kiss(msg);
      break;

      case "hugme":
        hugme(msg);
      break;

      case "patme":
        patme(msg);
      break;

      case "kissme":
        kissme(msg);
      break;
    }
  });

//civ 6 commands
  bot.on('message', async msg => {
    if (msg.author.bot) return;

    var prefix = '-civ'
    if (msg.content.substring(0, prefix.length) != prefix) return;

    var args = msg.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();

    switch (command)
      {
        case "alexander":
          Alexander(msg);
        break;

        case "amanitore":
          Amanitore(msg);
        break;

        case "catherine":
          Catherine(msg);
        break;

        case "chandragupta":
          Chandragupta(msg);
        break;

        case "cleopatra":
          Cleopatra(msg);
        break;

        case "cyrus":
          Cyrus(msg);
        break;

        case "gilgamesh":
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
