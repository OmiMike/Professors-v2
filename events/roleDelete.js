const Discord = require("discord.js");

module.exports = async (client, role) => {

  const settings = client.getGuildSettings(role.guild);

  if (settings.roleCreateDeleteUpdate !== "true") return;

  const logs = role.guild.channels.find(channel => channel.name === settings.logs_channel);
  if(!logs) return;

  const entry = await role.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first())
  let user = entry.executor

  var roleDeleted = new Discord.RichEmbed()
  .setAuthor(`${role.guild.name}`, role.guild.iconURL)
  .setColor(role.color)
  .setDescription(`❯ **Role Deleted: ${role.name}**`)
  .setFooter(`By ${user.username}#${user.discriminator}`, user.avatarURL)
  .setTimestamp()
  return logs.send(roleDeleted);

};