const Discord = require('discord.js');


/**
 *	This function returns a new CUSTOM RichEmbed object like you did with the hugboxes before
 * 
 *	@param color Is the color for the embed
 *	@param title is the title
 * 	@param image is the image
 * 
 * So we have one central function to return a richembed rather than creating a fuck tonne before!
 * Plus, these params are all optional, so we could just create an empty one, but it uses the
 * default values given after the equal sign here!
 * Why do we do that? Look at your old hugboxes. The color is always the same as well as the title...
 * It's redundant.
 * 
 */
const CustomRichEmbed = (title = "", image = "", color = "#7BACF8") => {
	return new Discord.RichEmbed().setColor(color).setTitle(title).setImage(image)
}


/**
 * So instead, we can just create a list of hugboxes etc. and use them later. We really only need the texts.
 * But of course we wanna embed the auther's username as well as other variables we don't have in 
 * this scope (since we are now defining these embeds before we even go into the function!) 
 * so we're using placeholders~
 * 
 * Now something more professional: Custom class! Since we have lots of different things we wanna do
 * like hug, kiss etc.
 * And we want to randomize it, we can create a custom function
 * 
 * When creating an instance of this hug box class it'll then return a discord embed with random stuff
 * 
 */
const hugImages = [
	'https://66.media.tumblr.com/a26fdd97b6e83efd650ef6f95df570d5/tumblr_otesasJwMg1vk9ywzo1_500.gif',
	'https://68.media.tumblr.com/b50979777a07989c548eeeb9fe114766/tumblr_occo51Nns71szsg9do1_1280.png',
	'https://i.pinimg.com/736x/bf/f2/16/bff21646891fd203edf09ba430efa371.jpg',
	'https://orig00.deviantart.net/53c5/f/2015/254/b/5/online__by_lycangel-d995n38.png',
	'https://i.pinimg.com/736x/79/76/40/797640b1c27e2ed8978a2f9d1f62eb36--furry-art-furries.jpg'
]
class HugBox {
	constructor(author, member) {
		const randomHugImage = Math.floor(Math.random() * Math.floor(hugImages.length));
		return CustomRichEmbed(`*${author} hugs ${member}*`, hugImages[randomHugImage]); // This will get a random image from the array above and the default color
	}
}


/// Now your turn: Create classes for the others aswell! ( Probably want to put those in separate folders/files)
// I commented that out first

// Yeah...
/* const Patbox1 = new Discord.RichEmbed()
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
	({
		embed: Patbox1
	}),
	({
		embed: Patbox2
	}),
	({
		embed: Patbox3
	}),
	({
		embed: Patbox4
	}),
	({
		embed: Patbox5
	})
]

// ....
// And this
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
	({
		embed: Kissbox1
	}),
	({
		embed: Kissbox2
	}),
	({
		embed: Kissbox3
	}),
	({
		embed: Kissbox4
	}),
	({
		embed: Kissbox5
	})
]

////////////////////////////////////
///////////// Here the functions ///
////////////////////////////////////

// ...Same with those
const pat = (msg) => {
	const x = Math.floor(Math.random() * Math.floor(pat_boxes.length));

	if (user) {
		const member = msg.guild.member(user);
		if (member) {
			msg.channel.send(pat_boxes[x]);
		} else {
			msg.channel.send(`That user ain't here.`);
		}
	} else {
		msg.channel.send(`Who do you want to pat?`);
	};

	var user = msg.mentions.users.first();

}

// The actual kiss function!
const kiss = (msg) => {
	const x = Math.floor(Math.random() * Math.floor(kiss_boxes.length));

	if (user) {
		const member = msg.guild.member(user);
		if (member) {
			msg.channel.send(kiss_boxes[x]);
		} else {
			msg.channel.send(`That user ain't here.`);
		}
	} else {
		msg.channel.send(`Who do you want to kiss?`);
	};
	var user = msg.mentions.users();

} */

// THIS IS THE ACTUAL FUNCTION WOOOOHOO
const hug = async (msg) => {

	if (!msg.mentions) {
		msg.channel.send('Who do you want to hug?');
		return;
	}
	var member = await msg.mentions.members.first();
	
	if (member.user.username) {
		msg.channel.send(new HugBox(msg.author.username, member.user.username)); // Create an instance of hugbox like so and it'll call the thing I created above
		// The actual issue btw was that you weren't getting member.user.username but instead just member
	} else {
		msg.channel.send(`That user isn't a part of the server.`)
	}
};

/* 
// the actual hugme function
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
	// See this ? It's almost the same as the one above
	// There's optimization potential
	// Write one central function to generate a random number instead

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
 */
module.exports = {
	hug,
/* 	pat,
	kiss,
	hugme,
	patme,
	kissme */
}