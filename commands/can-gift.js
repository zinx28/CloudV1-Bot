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
			if (!reason == ! null) return message.channel.send(`Failed to change gift to ${reason}`);
			if (!isNaN(reason)) {
       return message.reply('This is a number!');
      }
		//	if("allowsGifts" == false){
       // return message.channel.send("Your Gifts Are Already OFF")
			//}
		  
			if (reason == 'True') {
			//	console.log({"userId": message.author.id}, {"allowsGifts": Data.})
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "allowsGifts": true } })
				return message.channel.send(`Updated your Gifts to ${reason}! (relog to show the change)`)
			}
			if (reason == 'False') {
				Data.collection.updateOne({ "userId": message.author.id }, { $set: { "allowsGifts": false } })
				return message.channel.send(`Updated your Gifts to ${reason}! (relog to show the change)`)
			}
			if (!reason == ! ' ') return message.channel.send("Please say True or False")
			message.reply("Please say True or False")
		}else{
message.reply("idk whats this is about lol")
	}
		})
	
}

module.exports.config = {
	name: "gift",
	description: "",
	usage: "C!gift",
	accessableby: "Members",
	aliases: []
}
