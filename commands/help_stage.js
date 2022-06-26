const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const embed = new Discord.MessageEmbed()
		.setColor('#0077FC')
		.setTitle('Stages')
		.addFields(
			{ name: 'worldcup', value: 'C!background worldcup' },
			{ name: 'seasonX', value: 'C!background seasonX' },
			{ name: 'season11', value: 'C!background season11' },
			{ name: 'fortnitemares', value: 'C!background fortnitemares' },
			{ name: 'Galileo', value: 'C!background Galileo' },
			{ name: 'winter19', value: 'C!background winter19' },
			{ name: 'GalileoLite', value: 'C!background GalileoLite' },
			{ name: 'season12', value: 'C!background season12' },
			{ name: 'season13', value: 'C!background season13' },
			{ name: 'season14', value: 'C!background season14' },
			{ name: 'halloween2020', value: 'C!background halloween2020' },
			{ name: 'season15', value: 'C!background season15' },
			{ name: 'season15xmas', value: 'C!background season15xmas' },
			{ name: 'season16', value: 'C!background season16' },
			{ name: 'season17', value: 'C!background season17' },
		);
	message.channel.send(embed)
}

module.exports.config = {
	name: "help-stage",
	description: "",
	usage: "?help",
	accessableby: "Members",
	aliases: ["stages"]
}