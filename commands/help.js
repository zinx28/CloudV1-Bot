const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle('Help')
        .addFields(
            {name: 'Prefix', value: 'C!'},
            {name: 'setup-user, signup', value: 'Make an account C!signup {username} Eg : C!signup CloudFN'},
            {name: 'change-vbucks, vbucks, vbucks', value: 'Changes the Vbucks amount'},
            {name: 'change-level, level', value: 'Changes the account Level'},
						{name: 'change-vbucks, vbucks', value: 'Changes the account Level'},
            {name: 'change-username, username', value: 'Changes the account Username'},
					  {name: 'change-email, email', value: 'Changes the account Email'},
						{name: 'change-password, password', value: 'Changes the account Password'},
						{name: 'delete-user, del', value: 'Delete your account'},
						{name: 'help-stage, stages', value: 'Shows all the stages'},
        );
        message.channel.send(embed)
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "?help",
    accessableby: "Members",
    aliases: []
}