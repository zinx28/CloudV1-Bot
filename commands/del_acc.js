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
	Data.findOne({
		userId: message.author.id
	}, (err, Getdata) => {
		if (err) console.log(err);
		const reason = args.slice(1).join(" ") || null
		if (Getdata) {} else {
				return message.reply("You dont have an account! Please do C!setup-user {username} in DMs with me eg : C!setup-user CloudFN")
		}
		const idBOI = crypto.randomBytes(16).toString('hex')
		var ReadyBOI
					ReadyBOI = true
			const newMadeDataF = delete Data3({
			     id: idBOI,
					 userId: message.author.id
					})
										
					//User
					const newMadeDataUSER = delete Data({
						id: idBOI,
						createdAt: new Date(),
						allowsGifts: true,
						userId: message.author.id,
						displayName: reason,
						email: reason + "@Cloud.Dev",
						password: bcrypt.hashSync(idBOI, bcrypt.genSaltSync(10))
					})

					//CC
					const newMadeDataCC = delete Data2({
						id: idBOI,
						userId: message.author.id,
						mtxplatform: "EpicPC"
					})

					//Athena
					const newMadeDataA = delete Data1({
							id: idBOI,
						userId: message.author.id,
					})
			// lol = Data.collection.findOne({"userId": message.author.id}, {"displayName": String})	
					 const embed699 = new Discord.MessageEmbed()
        .setTitle('Account Deleted')
        .setDescription(`Account Deleted UserId : ${message.author.id}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(message.author.username);
		   Data.collection.findOneAndDelete({"userId": message.author.id})
			 Data1.collection.findOneAndDelete({"userId": message.author.id})
			 Data2.collection.findOneAndDelete({"userId": message.author.id})
			 Data3.collection.findOneAndDelete({"userId": message.author.id})
				client.channels.cache.get("863414657225850910").send(embed699)
			 return message.channel.send(`Deleted User Please Make An New Account`)
				
		})
	
	}
module.exports.config = {
	name: "del-user",
	description: "",
	usage: "C!setup-user",
	accessableby: "Members",
	aliases: ["delete", "del"]
}
