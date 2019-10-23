const Discord = require('discord.js');

const CustomRichEmbed = (title = "", image = "", color = "#7BACF8") => {
	return new Discord.RichEmbed().setColor(color).setTitle(title).setImage(image)
}



const hugImages = [
	'https://66.media.tumblr.com/a26fdd97b6e83efd650ef6f95df570d5/tumblr_otesasJwMg1vk9ywzo1_500.gif',
	'https://68.media.tumblr.com/b50979777a07989c548eeeb9fe114766/tumblr_occo51Nns71szsg9do1_1280.png',
	'https://i.pinimg.com/736x/bf/f2/16/bff21646891fd203edf09ba430efa371.jpg',
	'https://orig00.deviantart.net/53c5/f/2015/254/b/5/online__by_lycangel-d995n38.png',
	'https://i.pinimg.com/736x/79/76/40/797640b1c27e2ed8978a2f9d1f62eb36--furry-art-furries.jpg'
]

const patImages = [
  'https://images-ext-1.discordapp.net/external/IW1KhUHCMGwlx7Ku2Fb8xWmzjv7LHQbsxwTsev91Fu8/https/static1.e621.net/data/f4/73/f473be9fa8cef3a022cc4789ea61a029.png?width=398&height=376',
  'https://images-ext-1.discordapp.net/external/JtmgQUvWM34q_i2asb5czbHwThVFwx7KlqTFqmWoN0w/https/static1.e621.net/data/sample/30/b8/30b842729c214528ff725f3f7f39854f.jpg?width=375&height=375'
]


class HugBox {
	constructor(author, member) {
		const randomHugImage = Math.floor(Math.random() * Math.floor(hugImages.length));
		return CustomRichEmbed(`*${author} hugs ${member}*`, hugImages[randomHugImage]);
	}
}

class PatBox {
  constructor(author, member) {
    const randomPatImage = Math.floor(Math.random() * Math.floor(patImages.length));
    return CustomRichEmbed(`*${author} pats ${member}*`, patImages[randomPatImage]);
  }
}


const hug = async (msg) => {

	if (!msg.mentions) {
		msg.channel.send('Who do you want to hug?');
		return;
	}
	var member = await msg.mentions.members.first();
	
	if (member.user.username) {
		msg.channel.send(new HugBox(msg.author.username, member.user.username));
	} else {
		msg.channel.send(`That user isn't a part of the server.`)
	}
};

const pat = async (msg) => {

  if (!msg.mentions) {
    msg.channel.send('Who do you want to pat?');
    return;
  }
  var member = await msg.mentions.members.first();

  if (member.user.username) {
    msg.channel.send(new PatBox(msg.author.username, member.user.username));
  } else {
    msg.channel.send(`That user isn't a part of the server.`)
  }
};

//======INTERACT-ME THINGS======

const hugme = (msg) => {
	const hugme_texts = [
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

	const patme_texts = [
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
	const kissme_texts = [
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
	hug,
	pat,
	hugme,
	patme,
	kissme
}
