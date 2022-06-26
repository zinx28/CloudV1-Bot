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
const Data = require('../models/user.js');

const { MessageEmbed, MessageAttachment } = require("discord.js");
module.exports.run = async (client, message, args) => {
		Data.findOne({
			userId: message.author.id
		}, (err, Getdata) => {
    if (Getdata) {
			const reason = args.slice(1).join(" ") || null
			if (!reason == ! null) return message.channel.send(`Null!`);
			if (isNaN(reason)) {
       return message.reply('This isnt a number!');
      }
			message.reply("This Command Is Disabled")
			
		}else{
		return message.reply("This Command Is Disabled")
		}
		})

	
	}

module.exports.config = {
	name: "whois",
	description: "",
	usage: "C!setup-user",
	accessableby: "Members",
	aliases: ["who-is"]
}
