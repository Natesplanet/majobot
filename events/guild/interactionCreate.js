// const Discord = require("discord.js");

module.exports = async (client, interaction) => {
 if (interaction.isCommand()) {
  await interaction.deferReply({ ephemeral: false }).catch((err) => {
   console.log(err);
  });
  const cmd = client.slashCommands.get(interaction.commandName);
  if (!cmd) return interaction.followUp({ ephemeral: true, content: "An error has occured!" });
  const args = [];
  for (let option of interaction.options.data) {
   if (option.type === "SUB_COMMAND") {
    if (option.name) args.push(option.name);
    option.options?.forEach((x) => {
     if (x.value) args.push(x.value);
    });
   } else if (option.value) args.push(option.value);
  }
  cmd.run(client, interaction, args);
  if (client.additional_config.pm2.enabled == true && client.additional_config.pm2.metrics.slash_commands_used == true) {
   client.slash_commands_used.inc();
  }
 }
};
