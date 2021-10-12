const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Display info about the server.'),
    async execute(interaction) {
        return interaction.reply(`Server name: ${interaction.guild.name}\nTotal server booster: ${interaction.guild.premiumSubscriptionCount}\nTotal members: ${interaction.guild.memberCount}`);
    }
}