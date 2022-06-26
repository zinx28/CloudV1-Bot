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
const Data = require('../models/cc.js');

const { MessageEmbed, MessageAttachment } = require("discord.js");
module.exports.run = async (client, message, args) => {
{
		Data.findOne({
			userId: message.author.id
		}, (err, Getdata) => {
    if (Getdata) {
			const reason = args.slice(1).join(" ") || null
			if (!reason == ! null) return message.channel.send(`Failed to change vbucks!`);
			if (isNaN(reason)) {
       return message.reply('This isnt a number!');
      }
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "vbucks": reason } })
				return message.channel.send(`Updated your Vbucks to ${reason}! (relog to show the change)`)
			
		}else{
		return message.reply("You dont have an account! Please do C!setup-user {username} in DMs with me eg : C!setup-user CloudFN")
		}
		})
}	
	}

module.exports.config = {
	name: "change-vbucks",
	description: "",
	usage: "C!setup-user",
	accessableby: "Members",
	aliases: ["vbucks", "vbuck"]
}