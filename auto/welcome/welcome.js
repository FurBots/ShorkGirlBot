const welcome = (member) => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to The Spooooooky Fluffhole, ${member}!\nOnce you've read the <#629951789491552256>, head over to <#629951854025113601> and choose some roles you want! When you're done with that, go and ask an Admin to give you them in <#630036737464336384>.\nWe are still a very new server, and we hope to grow! We're thankful that you've joined us.\n\nHave a good time! :3\nLove, Jaddy`);
}

module.exports = {
  welcome
};
