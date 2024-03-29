exports.run = async (client, message) => {
  const scoreLevel = client.points.get(message.author.id).level;
  !scoreLevel ? message.channel.send('You have no levels yet.') : message.channel.send(`You are currently level ${scoreLevel}!`);
};

exports.conf = {
  hidden: false,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
	name: 'level',
	category: 'Fun',
	description: 'Well, let\'s see how many levels you have!',
	usage: 'level'
};