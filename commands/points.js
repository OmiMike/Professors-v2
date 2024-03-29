
exports.run = async (client, message) => {
    const scorePoints = client.points.get(message.author.id).points;
    !scorePoints ? message.channel.send('You have no points yet.') : message.channel.send(`You have ${scorePoints} points!`);
};
  
exports.conf = {
  hidden: false,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "points",
  category: "User",
  description: "Shows your total point and level.",
  usage: "points"
};