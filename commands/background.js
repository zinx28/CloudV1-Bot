const Discord = require("discord.js");
const mongoose = require('mongoose');
const config = require(`../config.json`);
mongoose.connect(`${config.mon}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log(`${config.log} Connected to the database!`);
}).catch((err) => {
	console.log(err);
})

//Data
const Data = require('../models/a.js');
const Data1 = require('../models/user')

const { MessageEmbed, MessageAttachment } = require("discord.js");
module.exports.run = async (client, message, args) => {
Data.findOne({
			userId: message.author.id
		}, (err, Getdata) => {
    if (Getdata) {
    	const reason = args.slice(1).join(" ") || null
				const embed = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Error`)
				.setDescription(`Failed to change Background to ${reason}`)
				.setTimestamp();
      if (!reason == ! null) return message.channel.send(embed)
			if (!isNaN(reason)) {
				const embed1 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Error`)
				.setDescription(`This is a number!`)
				.setTimestamp();
        return message.channel.send(embed1)
      }
			if (reason == 'worldcup') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "worldcup" } })
				const embed2 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed2)
				//return message.channel.send(`Updated your Background changed to ${reason}! (relog to show the change)`)
			}
			if (reason == 'seasonX') {
			//	console.log({"userId": message.author.id}, {"allowsBackground changed": Data.})
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "seasonX" } })
								const embed3 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed3)
			}
			if (reason == 'season11') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "season11" } })
								const embed4 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed4)
			}
			if (reason == 'fortnitemares') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "fortnitemares" } })
								const embed5 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed5)
			}
			if (reason == 'Galileo') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "Galileo" } })
								const embed6 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed6)
			}
			if (reason == 'winter19') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "winter19" } })
								const embed7 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed7)
			}
			if (reason == 'GalileoLite') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "GalileoLite" } })
								const embed8 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed8)
			}
			if (reason == 'season12') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "season12" } })
								const embed9 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed9)
			}
			if (reason == 'season13') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "season13" } })
								const embed10 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed10)
			}
			if (reason == 'season14') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "season14" } })
								const embed11 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed11)
			}
			if (reason == 'halloween2020') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "halloween2020" } })
								const embed12 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed12)
			}
			if (reason == 'season15') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "season15" } })
								const embed13 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed13)
			}
			if (reason == 'season15xmas') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "season15xmas" } })
								const embed14 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed14)
			}
			if (reason == 'season16') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "season16" } })
								const embed15 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed15)
			}
			if (reason == 'season17') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "stage": "season17" } })
								const embed16 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Updated Background`)
				.setDescription(`Updated your Background changed to ${reason}! (relog to show the change)`)
				.setTimestamp();
        return message.channel.send(embed16)
			}
			const embed17 = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle(`Error`)
				.setDescription(`Not a Vaild Stage`)
				.setTimestamp();
      if (!reason == ! ' ') return message.channel.send(embed17)
		}
		})
}

module.exports.config = {
    name: "background",
    description: "",
    usage: "?help",
    accessableby: "Members",
    aliases: ["stage"]
}
