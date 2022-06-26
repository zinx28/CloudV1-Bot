const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'C!';
const fs = require('fs');
client.cmdlist = new Discord.Collection();
const config = require(`./config.json`);

client.once('ready', () => {
	console.log(`${config.log} Bot Online :D`);
	console.log(`${config.log} ${client.user.tag} is online.`)
	client.user.setActivity("Making Accounts || being remaked soon", { type: "WATCHING" })
});
/*
const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const cmd = require(`./cmds/${file}`);

    client.cmdlist.set(cmd.name, cmd);
}*/

//["command"].forEach(handler => {
//  require(`./handlers/command.js`)(client);
//});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
//fs.readdir("./commands/", (err, files) => {
fs.readdir("./commands/", (err, files) => {
	if (err) console.log(err)

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		return console.log(`${config.log} Couldn't Find Commands!`);
	}

	jsfile.forEach((f, i) => {
		let pull = require(`./commands/${f}`);
		client.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(alias => {
			client.aliases.set(alias, pull.config.name)
		});
	});
});

client.on("message", async message => {

	let prefix = config.prefix;
	let messageArray = message.content.toLowerCase().split(" ");
	let cmd = messageArray[0];
	// let args = message.content.substring(message.content.indexOf(' ')+1);
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/);
	if (!message.content.toUpperCase().startsWith(prefix)) return;
	let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
	if (commandfile) commandfile.run(client, message, args)

	/*
			const { cooldowns } = client;
	
		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new discord.Collection());
		}
	
		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;
	
		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
	
			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(
					`please wait ${timeLeft.toFixed(
						1
					)} more second(s) before reusing the \`${command.name}\` command.`
				);
			}
		}
	
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	
		try {
			command.execute(message, args);
		} catch (error){
			message.reply(' Sorry, There was an error trying to execute that command! Try Using 0!help');
		} */
})

client.login('PUT-DISCORD-TOKEN-HERE');

/*

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'help') {
        client.cmdlist.get('help').execute(message, args, Discord);
    }
    else if (command == "setup-user") {
        client.cmdlist.get('setup-user').execute(message, args, Discord)
    }
    else if (command == "change-vbucks") {
        client.cmdlist.get('change-vbucks').execute(message, args, Discord)
    }
    else if (command == "change-username") {
        client.cmdlist.get('change-username').execute(message, args, Discord)
    }
 */
