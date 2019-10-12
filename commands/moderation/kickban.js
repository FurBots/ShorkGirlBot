const kick = (msg, member) => {
  if (msg.member.hasPermission('KICK_MEMBERS'))
          {
            const user = msg.mentions.users.first();
            if (user) {
              const member = msg.guild.member(user);
              if (member) {
                member.kick('Optional reason that will display in the audit logs').then(() => {
                  msg.reply(`Kicked ${user.tag}, close the door on your way out, please and thank you.`);
                }).catch(err => {
                  msg.reply("I cant kick them, I don't have the permissions, silly!");
                  console.error(err);
                });
              } else {
                msg.reply('That user is not in the server, though.');
              }
            } else {
              msg.reply('Who?')};
          }
};

const ban = (msg, member) => {
  if (msg.member.hasPermission('BAN_MEMBERS'))
          {
            const user = msg.mentions.users.first();
            if (user) {
              const member = msg.guild.member(user);
              if (member) {
                member.ban('Optional reason that will display in the audit logs').then(() => {
                  msg.reply(`Begone, ${user.tag}! And never return!`);
                }).catch(err => {
                  msg.reply('I cannot ban this user.');
                  console.error(err);
                });
              } else {
                msg.reply('That user is not in the server.');
              }
            } else {
              msg.reply('What user do you want me to bap?')};
          }
}

module.exports = {
  kick, ban
}
