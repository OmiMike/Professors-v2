const Discord = require("discord.js");
const colors = require('../assets/colorsrandom.json')

module.exports = async (client, oldMember, newMember) => {

  const settings = client.getGuildSettings(oldMember.guild);

  if (settings.voiceStateUpdate !== "true") return;

  const logs = oldMember.guild.channels.find(channel => channel.name === settings.logs_channel);
  if(!logs) return;

  const color = colors[Math.floor(Math.random() * colors.length)];

  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if (oldUserChannel === undefined && newUserChannel !== undefined) {

      const editedMessage = new Discord.RichEmbed()
       .setDescription(`\`${newMember.user.username}#${newMember.user.discriminator}\` joined voice channel \`${newUserChannel.name}\``)
       .setColor(color)
       .setTimestamp()
       logs.send(editedMessage)

 } else if(newUserChannel === undefined) {

      const editedMessage = new Discord.RichEmbed()
      .setDescription(`\`${newMember.user.username}#${newMember.user.discriminator}\` left voice channel \`${oldUserChannel.name}\``)
      .setColor(color)
      .setTimestamp()
      logs.send(editedMessage)

  } else {

    const editedMessage = new Discord.RichEmbed()
    .setDescription(`\`${newMember.user.username}#${newMember.user.discriminator}\` switched voice channel \`${oldUserChannel.name}\` ==> \`${newUserChannel.name}\``)
    .setColor(color)
    .setTimestamp()
    logs.send(editedMessage)

  }

};