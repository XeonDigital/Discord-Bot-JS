const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [];
const  commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try{
        console.log('Started refreshing application (/) comamnds.');
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId), 
            //Change the above ^ to Route.applicationCommands(clientId) to enable global commands. 
            //Do not use global commands for testing since it is cached for an hour.
            { body: commands }
        );

        console.log('Sucessfully reloaded application (/) commands.');
    } catch(error){
        console.error(error);
    }
})();


