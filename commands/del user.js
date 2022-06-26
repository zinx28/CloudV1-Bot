const Discord = require("discord.js");
const mongoose = require('mongoose');
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const config = require(`../config.json`);
//Connect
mongoose.connect(`${config.mon}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log(`${config.log} Connected to the database!`);
}).catch((err) => {
	console.log(err);
})

const Data = require('../models/user')
const Data1 = require('../models/a')
const Data2 = require('../models/cc')
const Data3 = require('../models/f')
module.exports.run = async (client, message, args) => {
	if(message.member.roles.cache.has('826487103432425473')){
        const reason = args.slice(1).join(" ") || null
if (!reason == ! null) return message.channel.send(`I CANT DELETE A ... USER ITS BLANK TF`);

	Data.findOne({
		userId: reason
	}, (err, Getdata) => {
		if (err) console.log(err);
		if (Getdata) {
		  message.reply("KAA BOOM!")
		} else {
				return message.reply("Theres no account WOW BOT")
		}
		const idBOI = crypto.randomBytes(16).toString('hex')
		var ReadyBOI
			ReadyBOI = true
									
			// lol = Data.collection.findOne({"userId": message.author.id}, {"displayName": String})	
					 const embed699 = new Discord.MessageEmbed()
        .setTitle('Account Deleted')
        .setDescription(`Forced Account Deleted UserId : ${reason}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(message.author.username);
		   Data.collection.findOneAndDelete({"userId": reason})
			 Data1.collection.findOneAndDelete({"userId": reason})
			 Data2.collection.findOneAndDelete({"userId": reason})
			 Data3.collection.findOneAndDelete({"userId": reason})
				client.channels.cache.get("863414657225850910").send(embed699)
			 return message.channel.send(`Forced Deleted User: ${reason}`)
				
		})
        }else{
					return message.reply("You Cant Use This Command")
				}	
	}
module.exports.config = {
	name: "user-del",
	description: "",
	usage: "C!setup-user",
	accessableby: "Members",
	aliases: ["delete", "test-del"]
}
