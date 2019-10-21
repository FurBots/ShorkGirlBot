const Discord = require('discord.js');

const help = (msg) => {
  const HelpEmbed = new Discord.RichEmbed()
    .setColor('#654bb8')
    .setTitle('Shork Girl Command List')
    .setThumbnail('https://i.imgur.com/JY14SZS.png')
    .addField("**Moderation**", "**-kick**\nKicks the Mentioned User.\n**-ban**\nBans the Mentioned User.\n**-ping**\nChecks how fast i'm responding to your message.")
    .addField("**Help**", '**-commands**\nLists all of the availible commands I got.\n**-wikis**\nLists what Wiki Content is availible..')
    .addField("**Interaction**", '**-hug**\nHugs the mentioned user!\n**-pat**\nPats the mentioned user!\n**-kiss**\nKisses the mentioned user!')
    .addField("**BotRP**", "**-hugme**\nGives you a big hug!\n**-patme**\nGives you a pat on the head!\n**-kissme**\nGives you a kiss on the cheek~")
    .setFooter("Created by Jaddy.");
  msg.channel.send({ embed: HelpEmbed });
};

const CivHelp = (msg) => {
  const CivHelpEmbed = new Discord.RichEmbed()
    .setColor('#654bb8')
    .setTitle('Shork Girl Game Wikis')
    .setThumbnail("https://i.imgur.com/JY14SZS.png")
    .addField("**CIVILIZATION 6**", "**-civ Leader**\nGives you info about a Civilization 6 Leader.")
    .setFooter("Created by Jaddy.");
  msg.channel.send({ embed: CivHelpEmbed })
}

module.exports = {
  help, CivHelp
};
