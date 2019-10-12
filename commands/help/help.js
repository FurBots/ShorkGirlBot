const Discord = require('discord.js');

const help = (msg) => {
  const HelpEmbed = new Discord.RichEmbed()
    .setColor('#654bb8')
    .setTitle('Shork Girl Command List')
    .setThumbnail('https://i.imgur.com/JY14SZS.png')
    .addField("**MODERATION**", '**-kick:**\nKicks the Mentioned User.\n**-ban:**\nBans the Mentioned User.\n**-ping:**\nCheck how fast the bot is responding to your messages.')
    .addField("**HELP**", '**-commands:**\nLists all availible Commands.')
    .addField("**INTERACTION**", '**-hug:**\nHugs the mentioned user, or you!\n**-pat:**\nPats the mentioned user, or you!\n**-kiss:**\nKisses the mentioned user, or you!')
    .setFooter("Created by Jaddy.");
  msg.channel.send({ embed: HelpEmbed });
};

module.exports = {
  help
};
