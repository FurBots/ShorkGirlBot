const Discord = require('discord.js');

const hug = async (msg) => {

  if (!msg.mentions) {
      msg.channel.send('Who do you want to hug?');
      return;
    }
  var member = await msg.mentions.members.first();

const Hugbox1 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} hugs ${member}*`)
  .setImage('https://66.media.tumblr.com/a26fdd97b6e83efd650ef6f95df570d5/tumblr_otesasJwMg1vk9ywzo1_500.gif')

const Hugbox2 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} hugs ${member}*`)
  .setImage('https://68.media.tumblr.com/b50979777a07989c548eeeb9fe114766/tumblr_occo51Nns71szsg9do1_1280.png')

const Hugbox3 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} hugs ${member}*`)
  .setImage('https://i.pinimg.com/736x/bf/f2/16/bff21646891fd203edf09ba430efa371.jpg')

const Hugbox4 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} hugs ${member}*`)
  .setImage('https://orig00.deviantart.net/53c5/f/2015/254/b/5/online__by_lycangel-d995n38.png')

const Hugbox5 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} hugs ${member}*`)
  .setImage('https://i.pinimg.com/736x/79/76/40/797640b1c27e2ed8978a2f9d1f62eb36--furry-art-furries.jpg')

  const hug_boxes = [
    ({ embed: Hugbox1 }),
    ({ embed: Hugbox2 }),
    ({ embed: Hugbox3 }),
    ({ embed: Hugbox4 }),
    ({ embed: Hugbox5 })
  ]

const x = Math.floor(Math.random() * Math.floor(hug_boxes.length));

          if (member.user.username) {
            msg.channel.send(hug_boxes[x]);
          }
          else
          {
            msg.channel.send(`That user isn't a part of the server.`)
          }
};

const pat = (msg) => {
  var user = msg.mentions.users.first();

const Patbox1 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} pats ${user}*`)
  .setImage('https://static1.e621.net/data/d4/32/d432f951f417e29b3491d6edc6c752c4.jpg')

const Patbox2 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} pats ${user}*`)
  .setImage('https://static1.e621.net/data/sample/30/b8/30b842729c214528ff725f3f7f39854f.jpg')

const Patbox3 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} pats ${user}*`)
  .setImage('https://static1.e621.net/data/sample/9e/d7/9ed7b0eb42e637083de322ab5136ad65.jpg')

const Patbox4 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} pats ${user}*`)
  .setImage('https://static1.e621.net/data/f4/73/f473be9fa8cef3a022cc4789ea61a029.png')

const Patbox5 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} pats ${user}*`)
  .setImage('https://static1.e621.net/data/sample/5f/8b/5f8b08d535b1704ceecdd500c8bd9cf8.jpg')

  const pat_boxes = [
    ({ embed: Patbox1 }),
    ({ embed: Patbox2 }),
    ({ embed: Patbox3 }),
    ({ embed: Patbox4 }),
    ({ embed: Patbox5 })
  ]

const x = Math.floor(Math.random() * Math.floor(pat_boxes.length));

        if (user)
        {
          const member = msg.guild.member(user);
          if (member)
          {
            msg.channel.send(pat_boxes[x]);
          }
          else
          {
            msg.channel.send(`That user ain't here.`);
          }
        }
        else {
          msg.channel.send(`Who do you want to pat?`);
        };
};

const kiss = (msg) => {
  var user = msg.mentions.users();

const Kissbox1 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} kisses ${user}*`)
  .setImage('')

const Kissbox2 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} kisses ${user}*`)
  .setImage('')

const Kissbox3 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} kisses ${user}*`)
  .setImage('')

const Kissbox4 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} kisses ${user}*`)
  .setImage('')

const Kissbox5 = new Discord.RichEmbed()
  .setColor('#7BACF8')
  .setTitle(`*${msg.author.username} kisses ${user}*`)
  .setImage('')

  const kiss_boxes = [
    ({ embed: Kissbox1 }),
    ({ embed: Kissbox2 }),
    ({ embed: Kissbox3 }),
    ({ embed: Kissbox4 }),
    ({ embed: Kissbox5 })
  ]

const x = Math.floor(Math.random() * Math.floor(kiss_boxes.length));

        if (user)
        {
          const member = msg.guild.member(user);
          if (member)
          {
            msg.channel.send(kiss_boxes[x]);
          }
          else
          {
            msg.channel.send(`That user ain't here.`);
          }
        }
        else {
          msg.channel.send(`Who do you want to kiss?`);
        };
};

const hugme = (msg) => {
  const hugme_texts =
    [
      `*Hugs ${msg.author.username}*`,
      `*Embraces ${msg.author.username}*`,
      `*Gives ${msg.author.username} a big hug*`,
      `*Picks up ${msg.author.username} while hugging 'em tight*`,
      `*Softly hugs ${msg.author.username}*`
    ]
  const x = Math.floor(Math.random() * Math.floor(hugme_texts.length));
  msg.channel.send(hugme_texts[x])
};

const patme = (msg) => {
  const patme_texts =
    [
      `*Pats ${msg.author.username}*`,
      `*Pats you on the head*`,
      `*Scruffs your hair*`,
      `*Pats ${msg.author.username} on the head*`,
      `*Pats you on the head*`
    ]
  const x = Math.floor(Math.random() * Math.floor(patme_texts.length));
  msg.channel.send(patme_texts[x])
};

const kissme = (msg) => {
  const kissme_texts =
    [
      `*Kisses ${msg.author.username}*`,
      `*Kisses ${msg.author.username}'s cheek*`,
      `*Gives you a kiss on the cheek*`,
      `*Kisses ${msg.author.username} on the cheek*`,
      `*Gives you a large kiss on the cheek*`
    ]
  const x = Math.floor(Math.random() * Math.floor(kissme_texts.length));
  msg.channel.send(kissme_texts[x])
}

module.exports = {
  hug, pat, kiss, hugme, patme, kissme
};
