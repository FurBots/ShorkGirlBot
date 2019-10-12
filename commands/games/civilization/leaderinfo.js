const Discord = require('discord.js');

const Gilgamesh = (msg) => {
  const GilgaEmbed = new Discord.RichEmbed()
    .setcolor('#904800')
    .setTitle('GILGAMESH')
    .setThumbnail('https://vignette.wikia.nocookie.net/civilization/images/f/ff/Gilgamesh_%28Civ6%29.png/revision/latest?cb=20161022012604')
    .addField('', 'Much rests upon your shoulders, King Gilgamesh. Your own people, and many people of the world, look to you as leader. But you are more than a mere man, and the weight of the world will never cause you to waver. Encourage the people of Sumer to settle the fertile lands along rivers, and be sure to choose your allies carefully - for there will be many vying for a piece of your strength. Venture forth, for it is time to begin your epic tale.')
    .addField('**Gilgamesh - Ally of Enkidu**', 'May declare war on anyone at war with his allies without incurring warmonger penalties.\nWhen at war with a common foe, Sumerian and allied units share pillage rewards and combat experience if within 5 tiles of each other.\n(Rise and Fall only) Earn Alliance Points per-turn for being at war with a common foe.')
    .addField('**Sumeria - Epic Quest**', '\nCapturing a Barbarian Outpost also grants a Tribal Village reward.\nMay levy city-state units at 50% of the usual Gold cost.')
  msg.channel.send({ embed: GilgaEmbed });
};

module.exports = {
  Gilgamesh
};
