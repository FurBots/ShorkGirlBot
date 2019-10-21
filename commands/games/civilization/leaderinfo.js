const Discord = require('discord.js');

const Gilgamesh = (msg) => {
  const GilgaEmbed = new Discord.RichEmbed()
    .setColor('#904800')
    .setTitle('Civilization VI Leader')
    .setThumbnail('https://vignette.wikia.nocookie.net/civilization/images/f/ff/Gilgamesh_%28Civ6%29.png/revision/latest?cb=20161022012604')
    .addField('**GILGAMESH**', 'He was the main character of the Epic of Gilgamesh, an Akkadian poem based on several earlier Sumerian stories, which described him as an exuberant demigod with superhuman strength, and credited him with building the walls of Uruk.\nHe leads the Sumerians in Civilization VI.\n')
    .addField('**Ally of Enkidu**', 'May declare war on anyone at war with his allies without incurring warmonger penalties.\nWhen at war with a common foe, Sumerian and allied units share pillage rewards and combat experience if within 5 tiles of each other.\n(Rise and Fall) Earn Alliance Points per-turn for being at war with a common foe.\n')
    .addField('**Epic Quest**', '\nCapturing a Barbarian Outpost also grants a Tribal Village reward.\nMay levy city-state units at 50% of the usual Gold cost.\n')
    .addField('**WarCart**', 'The War-Cart is a unique heavy cavalry unit of the Sumerian civilization in Civilization VI. It is available without any technological research.\n**Stats:**\n-Strongest of the starting units in the game.\n-No combat penalties against anti-cavalry units.\n+1 Movement if starting in open terrain.\n-Ignores enemy Zone of Control.')
    .addField('**Ziggurat**', 'The Ziggurat is a unique tile improvement of the Sumerian civilization in Civilization VI. It is available without any technological research and cannot be built on Hills.\n**Stats:**\n+2 Science\n+1 Culture if placed adjacent to a River\n+1 Culture (with Natural History)')
    .addField('**Agenda - Ally of Enkidu**', "Is easy to befriend, and likes civilizations who are his Declared Friends. Dislikes anyone denouncing or attacking his friends.")
    .setImage('https://vignette.wikia.nocookie.net/civilization/images/4/46/Civ_6_Gilgamesh_splash.jpg/revision/latest/scale-to-width-down/640?cb=20160926145111')
    .setFooter('https://civilization.fandom.com/wiki/Gilgamesh_(Civ6)')
  msg.channel.send({ embed: GilgaEmbed });
};

const Alexander = (msg) => {
  const AlexEmbed = new Discord.RichEmbed()
    .setColor('#c9c785')
    .setTitle('Civilization VI Leader')
    .setThumbnail('https://vignette.wikia.nocookie.net/civilization/images/3/33/Alexander_%28Civ6%29.png/revision/latest?cb=20180216210702')
    .addField('**ALEXANDER**', 'Alexander III *(20/21 July 356 BC – 10/11 June 323 BC)*, also known as Alexander the Great, was a king of the kingdom of Macedon.\nHe leads the Macedonians in Civilization VI.')
    .addField("**To the World's End**", "Macedonian cities never incur war weariness.\nAll military units heal completely when a city with a Wonder is captured.\nGain the Hetairoi unique unit with Horseback Riding.")
    .addField("**Hellenistic Fusion**", "Conquering a city grants a free Eureka for each Encampment and Campus district in the conquered city and a free Inspiration for each Holy Site and Theater Square district.")
    .addField("**Hypaspist**", "The Hypaspist is a unique melee unit of the Macedonian civilization in Civilization VI. It replaces the Swordsman.\n**Stats:**\n-Higher Production cost (100 vs. 90).\n+5 Combat Strength when besieging a district.\n+50% support bonuses.\n+10 Combat Strength vs. anti-cavalry units.\n-No strategic resource requirement.")
    .addField("**Basilikoi Paides**", "The Basilikoi Paides is a unique building of the Macedonian civilization in Civilization VI. It is built in the Encampment district and replaces the Barracks.\n**Stats:**\n+1 Production\n+1 Housing\n+1 Citizen slot\n+1 Great General point per turn\n+25% combat experience for all melee, ranged, anti-cavalry land units and Hetairoi trained in this city\n-Gain Science equal to 25% of the unit's cost when a non-civilian unit is created in this city.\n-(Gathering Storm) Strategic Resource Stockpiles increased by +10.")
    .addField("**Agenda - Short life of Glory**", "Likes civilizations at war with powers other than Macedon. Dislikes civilizations at peace.\n(Gathering Storm) Grievances against this leader decay at twice the usual rate.")
    .setImage('https://vignette.wikia.nocookie.net/civilization/images/7/74/Alexander_splash_%28Civ6%29.jpg/revision/latest?cb=20170323040155')
    .setFooter('https://civilization.fandom.com/wiki/Alexander_(Civ6)')
  msg.channel.send({ embed: AlexEmbed });
}

const Amanitore = (msg) => {
  const AmaniEmbed = new Discord.RichEmbed()
    .setColor('#787300')
    .setTitle('Civilization VI Leader')
    .setThumbnail('https://vignette.wikia.nocookie.net/civilization/images/b/b8/Amanitore_%28Civ6%29.png/revision/latest?cb=20171027193933')
    .addField('**AMANITORE**', 'Amanitore *(? – c. 20 CE)* was a Kandake of the ancient Kushitic Kingdom of Meroë.\nShe leads the Nubians in Civilization VI.')
    .addField('**Kandake of Meroë**', "+20% Production towards districts, increasing to +40% Production if there's a Nubian Pyramid adjacent to the City Center.")
    .addField('**Ta-Seti**', '+50% Production toward Ranged units.\nRanged units gain +50% combat experience.\n+1 Production for Mines over strategic resources, and +2 Gold for Mines over bonus and luxury resources.')
    .addField('**Pítati Archer**', 'The Pítati Archer is a unique ranged unit of the Nubian civilization in Civilization VI. It replaces the Archer.\n**Stats:**\n-Higher Production cost (70 vs. 60).\n-Higher Combat Strength (17 vs. 15).\n-Higher Ranged Strength (30 vs. 25).\n-Higher Movement (3 vs. 2).')
    .addField('**Nubian Pyramid**', 'The Nubian Pyramid is a unique tile improvement of the Nubian civilization in Civilization VI.\nIt must be built on Desert, Desert (Hills) or Floodplains (in Gathering Storm, Desert Floodplains only) tiles.\n**Stats:**\n+1 Faith\n+1 Food if adjacent to a City Center\n+1 Science if adjacent to a Campus\n+1 Gold if adjacent to a Commercial Hub\n+1 Gold if adjacent to a Harbor\n+1 Faith if adjacent to a Holy Site\n+1 Production if adjacent to an Industrial Zone\n+1 Culture if adjacent to a Theater Square')
    .addField('**Agenda - City Planner**', "Tries to keep the maximum number of districts in each city, and likes those that do the same. Dislikes civilizations that don't build as many districts as possible in their cities.")
    .setImage('https://vignette.wikia.nocookie.net/civilization/images/5/5d/Kandake_Amanitore_splash_%28Civ6%29.jpg/revision/latest?cb=20170727200242')
    .setFooter('https://civilization.fandom.com/wiki/Amanitore_(Civ6)')
  msg.channel.send({ embed: AmaniEmbed });
}

const Catherine = (msg) => {
  const CathEmbed = new Discord.RichEmbed()
    .setColor('#182269')
    .setTitle('Civilization VI Leader')
    .setThumbnail('https://vignette.wikia.nocookie.net/civilization/images/0/06/Catherine_de_Medici_%28Civ6%29.png/revision/latest?cb=20161022012602')
    .addField('**CATHERINE DE MEDICI**', 'Catherine de Medici *(13 April 1519 – 5 January 1589)* was an Italian noblewoman who was Queen of France from 1547 until 1559.\nShe leads the French in Civilization VI.')
    .addField("**Catherine's Flying Squadron**", "Has an extra level of Diplomatic Visibility with every civilization she's met.\nReceives a free Spy (and extra Spy capacity) with Castles.\nAll Spies start with a free promotion.")
    .addField("**Grand Tour**","+20% Production towards Medieval, Renaissance, and Industrial Wonders.\nDouble Tourism from Wonders of any era.")
    .addField("**Garde Impériale**", "The Garde Impériale is a unique melee unit of the French civilization in Civilization VI.\n**Stats:**\n+10 Combat Strength on the starting Capital's home continent.\n-Earns Great General points from kills.\n+10 Combat Strength vs. anti-cavalry units.")
    .addField("**Château**", "The Château is a unique tile improvement of the French civilization in Civilization VI. It must be built adjacent to a River.\n**Stats:**\n+2 Culture\n+1 Appeal\n+1 Culture for each adjacent Wonder, doubling to +2 with Flight.\n+1 Gold for each adjacent luxury resource")
    .addField("**Agenda - Black Queen**", "Gains as many Spies and as much Diplomatic Visibility as possible, and likes those who do the same. Dislikes civilizations that ignore these espionage activities.")
    .setImage('https://vignette.wikia.nocookie.net/civilization/images/2/24/Catherine_declaring_a_war_%28Civ6%29.jpg/revision/latest?cb=20161126215740')
    .setFooter('https://civilization.fandom.com/wiki/Catherine_de_Medici_(Civ6)')
  msg.channel.send({ embed: CathEmbed });
}

const Chandragupta = (msg) => {
  const ChandEmbed = new Discord.RichEmbed()
    .setColor('#27928f')
    .setTitle('Civilization VI Leader')
    .setThumbnail('https://vignette.wikia.nocookie.net/civilization/images/e/e2/Chandragupta_%28Civ6%29.png/revision/latest?cb=20190710113442')
    .addField('**CHANDRAGUPTA**', 'Chandragupta Maurya *(340 – 297 BC)* was the founder of the Maurya Empire in ancient India, over which he reigned from 321 to 298 BC.\nHe leads the Indians in Civilization VI: Rise and Fall.')
    .addField('**Arthashastra**', "Can declare a War of Territorial Expansion with Military Training, instead of Mobilization.\n+2 Movement and +5 Combat Strength for all units for the next 10 turns after declaring a War of Territorial Expansion.")
    .addField('**Dharma**', "Receive the Follower Beliefs of all religions with at least one follower in their cities, not just the majority religion.\n(Gathering Storm Only) Cities receive +1 Amenity for each religion with at least one follower in them.\n+2 Spread Religion charges for Missionaries.\n+100% Religious pressure from Indian Trade Routes.")
    .addField('**Varu**', "The Varu is a unique heavy cavalry unit of the Indian civilization in Civilization VI. It replaces the Horseman.\n**Stats:**\n-Higher Combat Strength (40 vs. 36).\n-Lower Movement (2 vs. 4).\n-Higher Production cost (120 vs. 80).\n-Reduces the Combat Strength of adjacent enemy units by 5 (cumulatively pre-Gathering Storm Only, non-cumulatively in Gathering Storm Only).\n-No strategic resource requirement.")
    .addField('**Stepwell**', "The Stepwell is a unique tile improvement of the Indian civilization in Civilization VI. It cannot be built on Hills, Floodplains or adjacent to another Stepwell.\n**Stats**:\n+1 Housing\n+1 Food\n+1 additional Food if placed adjacent to a Farm\n+1 additional Faith if placed adjacent to a Holy Site\n-(Gathering Storm Only) Prevents Food loss from droughts.")
    .addField('**Agenda - Maurya Empire**', "Dislikes civilizations that have cities close to his borders, and will try to conquer them. Likes civilizations that are not his neighbors.")
    .setImage('https://vignette.wikia.nocookie.net/civilization/images/1/18/Chandragupta_Civ6_Splash.png/revision/latest?cb=20171227171013')
    .setFooter('https://civilization.fandom.com/wiki/Chandragupta_(Civ6)')
  msg.channel.send({ embed: ChandEmbed});
}

const Cleopatra = (msg) => {
  const CleoEmbed = new Discord.RichEmbed()
    .setColor('#a99a00')
    .setTitle('Civilization VI Leader')
    .setThumbnail('https://vignette.wikia.nocookie.net/civilization/images/9/98/Cleopatra_%28Civ6%29.png/revision/latest?cb=20161022012603')
    .addField('**CLEOPATRA**', 'Cleopatra VII Philopator *(69 – 12 August 30 BC)*, more commonly known as Cleopatra, was the last active pharaoh of Ptolemaic Egypt.\nShe leads the Egyptians in Civilization VI.')
    .addField("**Mediterranean's Bride**", "International Trade Routes grant +4 Gold.\nTrade Routes sent to Egypt from other civilizations provide +2 Food for them and +2 Gold for Egypt.\n(Rise and Fall Only) +100% Alliance Points from trading with allies.")
    .addField("**Iteru**", "+15% Production towards districts and wonders built next to a River. Floodplains don't prevent placement of districts and wonders.\n(Gathering Storm) Districts, improvements and units are immune to damage from floods.")
    .addField("**Maryannu Chariot Archer**", "The Maryannu Chariot Archer is a unique ranged unit of the Egyptian civilization in Civilization VI. It replaces the Heavy Chariot.\n**Stats:**\n-Higher Production cost (120 vs. 65).\n-Higher maintenance cost (2 vs. 1).\n-Lower Combat Strength (25 vs. 28).\n-Has a ranged attack (35 Ranged Strength, 2 Range).\n-17 Ranged Strength vs. naval units.\n-Gains +2 Movement points if it starts on flat terrain.")
    .addField("**Sphinx**", "The Sphinx is a unique tile improvement of the Egyptian civilization in Civilization VI. It can be built on any land tile (including Hills and Floodplains) that is not adjacent to another Sphinx.\n**Stats:**\n+1 Culture\n+1 additional Culture (with Natural History)\n+1 Appeal (+2 Appeal in Gathering Storm)\n+1 Faith\n+2 additional Faith if placed next to a Wonder\n-(Gathering Storm) +1 additional Culture if built on Floodplains")
    .addField('**Agenda - Queen of the Nile**', "Likes civilizations with powerful militaries, and will try to ally with them to avoid conflict. Dislikes civilizations with weak militaries.")
    .setImage('https://vignette.wikia.nocookie.net/civilization/images/4/46/Civ6_splash_Cleopatra.jpg/revision/latest?cb=20160923202253')
    .setFooter('https://civilization.fandom.com/wiki/Cleopatra_(Civ6)')
  msg.channel.send({ embed: CleoEmbed });
}

const Cyrus = (msg) => {
  const CyrusEmbed = new Discord.RichEmbed()
    .setColor('#7BACF8')
    .setTitle('Civilization VI Leader')
    .setThumbnail('https://vignette.wikia.nocookie.net/civilization/images/1/14/Cyrus_%28Civ6%29.png/revision/latest?cb=20180227022814')
    .addField('**CYRUS**', "Cyrus II *(c. 600 – 530 BC)*, also known as Cyrus the Great, was the founder of the Achaemenid Empire.\nHe leads the Persians in Civilization VI.")
    .addField('**Fall of Babylon**', "+2 Movement for all units for the next 10 turns after declaring a Surprise War.\nDeclaring a Surprise War only counts as a Formal War for the purpose of warmongering and Grievances.\nOccupied cities have no penalties to their yields.\n(Rise and Fall) +5 Loyalty per turn in occupied cities with a garrisoned unit.")
    .addField('**Satrapies**', "Gains +1 Trade Route capacity with Political Philosophy.\nDomestic Trade Routes provide +2 Gold and +1 Culture.\nRoads built inside Persian territory are one level more advanced than usual.")
    .addField('**Immortal**', "The Immortal is a unique melee unit of the Persian civilization in Civilization VI. It replaces the Swordsman.\n**Stats:**\n-Higher Production cost (100 vs. 90).\n-Lower Combat Strength (30 vs. 36).\n-Can make melee and ranged attacks.")
    .addField('**Pairidaeza**', "The Pairidaeza is a unique tile improvement of the Persian civilization in Civilization VI. It cannot be built on Tundra or Snow tiles, or adjacent to another Pairidaeza.\n**Stats:**\n+1 Culture\n+2 Gold\n+2 Appeal\n+1 Culture for every adjacent Holy Site and Theater Square\n+1 Gold for every adjacent Commercial Hub and City Center\n+1 Culture (with Diplomatic Service)")
    .addField('**Agenda - Opportunist**', "Will often declare Surprise Wars, and likes civilizations that do the same. Dislikes civilizations that don't declare Surprise Wars.")
    .setImage('https://vignette.wikia.nocookie.net/civilization/images/a/a6/Cyrus_splash_%28Civ6%29.jpg/revision/latest?cb=20170323040030')
    .setFooter('https://civilization.fandom.com/wiki/Cyrus_(Civ6)')
  msg.channel.send({ embed: CyrusEmbed })
}

module.exports = {
  Gilgamesh, Alexander, Amanitore, Catherine, Chandragupta, Cleopatra, Cyrus
};
