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

const { MessageEmbed, MessageAttachment } = require("discord.js");
module.exports.run = async (client, message, args) => {
	if (message.channel.type === "dm") {
		Data.findOne({
			userId: message.author.id
		}, (err, Getdata) => {
    if (Getdata) {
			const reason = args.slice(1).join(" ") || null
			if (!reason == ! null) return message.channel.send(`Failed to change level!`);
			if (isNaN(reason)) {
       return message.reply('This isnt a number!');
      }
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "level": reason } })
				return message.channel.send(`Updated your Level to ${reason}! (relog to show the change)`)
			
		}else{
		return message.reply("You dont have an account! Please do C!setup-user {username} in DMs with me eg : C!setup-user CloudFN")
		}
		})
		}else{
			return message.reply("DMS!!!")
		}
	
	}

module.exports.config = {
	name: "change-level",
	description: "",
	usage: "C!setup-user",
	accessableby: "Members",
	aliases: ["levels", "level"]
}