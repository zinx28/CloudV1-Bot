const mongoose = require('mongoose');
const config = require(`../config.json`);
const crypto = require("crypto");
const bcrypt = require("bcrypt");
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
if (message.channel.type === "dm") {
	Data.findOne({
		userId: message.author.id
	}, (err, Getdata) => {
		if (err) console.log(err);
		const reason = args.slice(1).join(" ") || null
		if (Getdata) { } else {
				return message.reply("You dont have an account! Please do C!setup-user {username} in DMs with me eg : C!setup-user CloudFN")
		}
		if (!reason == ! null) return message.channel.send(`Failed to change username.The Username Cant be null.`);

		
			Data.collection.updateOne({ "userId": message.author.id }, { $set: { "password": bcrypt.hashSync(reason, bcrypt.genSaltSync(10)) } })
			return message.channel.send(`Updated your Password to ${reason}! (relog to show the change)`)
	})
}else{
return message.reply("This command only works in dm")
}

}


module.exports.config = {
	name: "change-password",
	description: "",
	usage: "C!change-username",
	accessableby: "Members",
	aliases: ["password"]
}
