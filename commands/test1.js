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
	if (message.channel.type === "dm") {
		Data.findOne({
			userId: message.author.id
		}, (err, Getdata) => {
			const reason = args.slice(1).join(" ") || null
      if (!Getdata) {}else{
				return message.channel.send("Failed to create account. The username may already be taken or you might already have an account")
			}
			if (!reason == ! null) return message.channel.send(`Failed to create account. The username may already be taken or you might already have an account.`);

			Data.findOne({ 'displayName': reason }, (err1, DataBOI1) => {
				if (DataBOI1) {
					if (DataBOI1.displayName == reason.toString()) {
						ReadyBOI = false
						return message.channel.send('Username is already in use please try again (run C!setup-user again)')
					}
				} else {

					const idBOI = crypto.randomBytes(16).toString('hex')
					var ReadyBOI
					ReadyBOI = true
					const newMadeDataF = new Data3({
						id: idBOI,
						userId: message.author.id
					})
					newMadeDataF.save().catch(err1 => console.log(err1))

					//User
					const newMadeDataUSER = new Data({
						id: idBOI,
						createdAt: new Date(),
						allowsGifts: true,
						userId: message.author.id,
						displayName: reason,
						email: reason + "@Cloud.Dev",
						password: bcrypt.hashSync(idBOI, bcrypt.genSaltSync(10))
					})
					newMadeDataUSER.save().catch(err1 => console.log(err1))

					//CC
					const newMadeDataCC = new Data2({
						id: idBOI,
						userId: message.author.id,
						mtxplatform: "EpicPC"
					})
					newMadeDataCC.save().catch(err1 => console.log(err1))

					//Athena
					const newMadeDataA = new Data1({
						id: idBOI,
						userId: message.author.id,
					})
					newMadeDataA.save().catch(err1 => console.log(err1))
             const embed69 = new Discord.MessageEmbed()
        .setTitle('Account Created')
        .setDescription(`Account Created UserId : ${message.author.id} AccountID: ${idBOI}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(message.author.username);
				client.channels.cache.get("863414657225850910").send(embed69)
					return message.channel.send(`Account Created Email : ${reason + "@Cloud.Dev"} Password: ${idBOI}`)
				}
			}
			)

		})
	} else {
	
	Data.findOne({
			userId: message.author.id
		}, (err, Getdata) => {
			const reason = args.slice(1).join(" ") || null
      if (!Getdata) {}else{
				return message.channel.send("Failed to create account. The username may already be taken or you might already have an account")
			}
			if (!reason == ! null) return message.channel.send(`Failed to create account. The username may already be taken or you might already have an account.`);
			Data.findOne({ 'displayName': reason }, (err1, DataBOI1) => {
				if (DataBOI1) {
					if (DataBOI1.displayName == reason.toString()) {
						ReadyBOI = false
						return message.member.send('Username is already in use please try again (run C!setup-user again)')
					}
				} else {

					const idBOI = crypto.randomBytes(16).toString('hex')
					var ReadyBOI
					ReadyBOI = true
					const newMadeDataF = new Data3({
						id: idBOI,
						userId: message.author.id
					})
					newMadeDataF.save().catch(err1 => console.log(err1))

					//User
					const newMadeDataUSER = new Data({
						id: idBOI,
						createdAt: new Date(),
						allowsGifts: true,
						userId: message.author.id,
						displayName: reason,
						email: reason + "@Cloud.Dev",
						password: bcrypt.hashSync(idBOI, bcrypt.genSaltSync(10))
					})
					newMadeDataUSER.save().catch(err1 => console.log(err1))

					//CC
					const newMadeDataCC = new Data2({
						id: idBOI,
						userId: message.author.id,
						mtxplatform: "EpicPC"
					})
					newMadeDataCC.save().catch(err1 => console.log(err1))

					//Athena
					const newMadeDataA = new Data1({
						id: idBOI,
						userId: message.author.id,
					})
         const embed69 = new Discord.MessageEmbed()
        .setTitle('Account Created')
        .setDescription(`Account Created UserId : ${message.author.id} AccountID: ${idBOI}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(message.author.username);
				client.channels.cache.get("863414657225850910").send(embed69)

           //const channelId = '863414657225850910'; //put your channel ID here
					newMadeDataA.save().catch(err1 => console.log(err1))
	message.member.send("Your info is..").catch(() => message.channel.send("Your Dms Are Off Please Turn It On!")).then(() => message.member.send(`Account Created Email : ${reason + "@Cloud.Dev"} Password: ${idBOI}`)).then(() => message.reply('I sent you your info!'))
/*
					return message.member.send(`Account Created Email : ${reason + "@Cloud.Dev"} Password: ${idBOI}`).catch((err1) => {
            message.channel.send(err.name);
          });*/
				}})
	
	})

}}
module.exports.config = {
	name: "setup-user",
	description: "",
	usage: "C!setup-user",
	accessableby: "Members",
	aliases: ["user", "signup"]
}
