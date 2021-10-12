const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guide')
        .setDescription('Get the current guide for Discord.js'),
    async execute(interaction) {
        return interaction.reply('Discord bot guide: https://discordjs.guide/');
    },
};