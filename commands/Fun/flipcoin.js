const Discord = require("discord.js");

module.exports = {
 name: "flipcoin",
 aliases: [],
 description: "Flip a virtual coin",
 category: "Fun",
 usage: "flipcoin",
 run: async (client, message, args) => {
  try {
   const answers = ["Heads", "Tails"];
   const answer = answers[Math.floor(Math.random() * answers.length)];
   const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`🪙 I'm get: ${answer}`)
    .setFooter("Requested by " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }))
    .setTimestamp();
   message.lineReply(embed);
  } catch (err) {
   message.lineReply({
    embed: {
     color: 16734039,
     description: "Something went wrong... :cry:",
    },
   });
  }
 },
};
