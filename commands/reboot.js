exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  message.delete();
    await message.reply("Bot is shutting down. Professors v2 will be restarting momentarily").then(m => m.delete(10000));
    client.commands.forEach( async cmd => {
      await client.unloadCommand(cmd);
    });
    process.exit(1);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["restart"],
    permLevel: 9
  };
  
  exports.help = {
    name: "reboot",
    category: "System",
    description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
    usage: "reboot"
  };