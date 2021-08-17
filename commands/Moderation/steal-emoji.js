const Discord = require("discord.js");
const prefix = process.env.PREFIX;

module.exports = {
 name: "steal-emoji",
 aliases: ["emoji", "steal-e", "emoji-steal"],
 description: "Steal the emoji from another server",
 category: "Moderation",
 usage: "steal-emoji <emoji> <new name>",
 run: async (client, message, args) => {
  const emoji = args[0];
  if (!message.guild.me.hasPermission("MANAGE_EMOJIS_AND_STICKERS")) {
   return await message.lineReply({
    embed: {
     color: 16734039,
     description: "<:error:860884617770303519> | I don't have premission to manage emojis!",
    },
   });
  }
  if (!message.member.hasPermission("MANAGE_EMOJIS_AND_STICKERS")) {
   return await message.lineReply({
    embed: {
     color: 16734039,
     description: "<:error:860884617770303519> | You don't have premission to manage emojis!",
    },
   });
  }
  if (!emoji) {
   return message.lineReply({
    embed: {
     color: 16734039,
     description: "<:error:860884617770303519> | Please provide emoji to add\n\n**Usage:** `" + prefix + " steal-emoji <emoji> <new name>`",
    },
   });
  }
  let custom = Discord.parseEmoji(emoji);
  const name = args[1] ? args[1].replace(/[^a-z0-9]/gi, "") : null;
  if (!name) {
   return message.lineReply({
    embed: {
     color: 16734039,
     description: "<:error:860884617770303519> | Please provide a new emoji name",
    },
   });
  }
  if (name.length < 2 || name > 32) {
   return message.lineReply({
    embed: {
     color: 16734039,
     description: "<:error:860884617770303519> | Emoji name length should be between 2 and 32 characters",
    },
   });
  }
  if (!custom) {
   return message.lineReply({
    embed: {
     color: 16734039,
     description: "<:error:860884617770303519> | Cannot find that emoji! Please try another emoji",
    },
   });
  }
  const URL = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`;
  message.guild.emojis.create(URL, name).then((emoji) => {
   message.lineReply({
    embed: {
     color: 4779354,
     description: `<:error:860884617770303519> | Emoji ${emoji} was successfully added!`,
    },
   })
    .catch((err) => {
      message.lineReply({
        embed: {
         color: 16734039,
         description: "<:error:860884617770303519> | I can't add the emoji, please try again!",
        },
       })
     console.log(err);
    });
  });
 },
};
