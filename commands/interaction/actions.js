const hug = (msg) => {
  var user = msg.mentions.users.first();

        if (user)
        {
          const member = msg.guild.member(user);
          if (member)
          {
            msg.channel.send(`*hugs ${user}*`);
          }
          else
          {
            msg.channel.send(`That user ain't here.`);
          }
        }
        else
        {
          msg.channel.send(`*hugs ${msg.author.username}*`);
        }
};

const pat = (msg) => {
  var user = msg.mentions.users.first();

        if (user)
        {
          const member = msg.guild.member(user);
          if (member)
          {
            msg.channel.send(`*pats ${user}*`);
          }
          else
          {
            msg.channel.send(`That user ain't here.`);
          }
        }
        else
        {
          msg.channel.send(`*pats ${msg.author.username}*`);
        }
};

const kiss = (msg) => {
  var user = msg.mentions.users.first();

        if (user)
        {
          const member = msg.guild.member(user);
          if (member)
          {
            msg.channel.send(`*kisses ${user}*`);
          }
          else
          {
            msg.channel.send(`That user ain't here.`);
          }
        }
        else
        {
          msg.channel.send(`*kisses ${msg.author.username}*`);
        }
};

module.exports = {
  hug, pat, kiss
};
