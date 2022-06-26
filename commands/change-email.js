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
const Data = require('../models/user');

module.exports.run = async (client, message, args) => {
	Data.findOne({
		userId: message.author.id
	}, (err, Getdata) => {
		if (err) console.log(err);
		const reason = args.slice(1).join(" ") || null
		if (!reason == ! null) return message.channel.send(`Failed to change Email.The Username Cant be null.`);
		if (Getdata) {} else {
				return message.reply("You dont have an account! Please do C!setup-user {username} in DMs with me eg : C!setup-user CloudFN")
		}
		Data.findOne({ 'email': reason + "@Cloud.Dev" }, (err1, DataBOI1) => {
		if (DataBOI1) {
					if (DataBOI1.email == reason + "@Cloud.Dev".toString()) {
						ReadyBOI = false
						return message.channel.send('Email is already in use please try again (run C!setup-user again)')
					}
				} else{
		   Data.collection.updateOne({ "userId": message.author.id }, { $set: { "email": reason + "@Cloud.Dev" } })
			return message.channel.send(`Updated your Email to ${reason + "@Cloud.Dev"}! (relog to show the change)`)
				}
		})
	
	})

}


module.exports.config = {
	name: "change-email",
	description: "",
	usage: "C!change-username",
	accessableby: "Members",
	aliases: ["email"]
}