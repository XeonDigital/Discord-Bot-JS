module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) return;

        try{
            await command.execute(interaction);
        } catch(error) {
            console.error(error);
            return interaction.reply({ content: 'There was an error while executing this command!', ephermeral: true});
        }
    },
};