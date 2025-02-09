const { MessageEmbed } = require("discord.js");
const axios = require("axios").default;

module.exports = {
 name: "bot-token",
 description: "Generate (fake) random Discord Bot token",
 run: async (client, interaction, args) => {
  try {
   const options = {
    method: "GET",
    url: "https://some-random-api.ml/bottoken",
   };
   axios.request(options).then((response) => {
    const embed = new MessageEmbed()
     .setColor("#4f545c")
     .setFooter({
      text: `Requested by ${interaction.user.username}`,
      iconURL: interaction.user.displayAvatarURL({
       dynamic: true,
       format: "png",
       size: 2048,
      }),
     })
     .setTitle(`${client.bot_emojis.discord_logo} Discord Token`)
     .setDescription("> ```" + response.data.token + "```\n>>> ||Notice: This token is automatically generated, it is not a real token for discord bot! It is only supposed to look like this!||");
    interaction.followUp({ embeds: [embed] });
   });
  } catch (err) {
   console.log(err);
   return client.createSlashCommandError(interaction, err);
  }
 },
};
