const Discord = require("discord.js")
const db = require("quick.db")
const prefix = process.env.PREFIX;

module.exports.run = async (client, message, args) => {
	
if (args[0].shift().toLowerCase() == 'welcome') {
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send({embed: {
                    color: 16734039,
                    title: "You must mention a channel to set!"
                }})
    }
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
	let embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Welcome Channel is seted as ${channel}`);
    message.channel.send(embed)
  } else if(args[0].shift().toLowerCase()] == 'bye') {
	  
	let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send({embed: {
                    color: 16734039,
                    title: "You must mention a channel to set!"
                }})
    }
    
    db.set(`byechannel_${message.guild.id}`, channel.id)
    
	let embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Bye Channel is seted as ${channel}`);
    message.channel.send(embed)
  } else if(args[0].shift().toLowerCase() == 'list') {
	let list = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("List of all values to set")
     	.addField("Welcome", "Set a welcome channel. Usage " + `${prefix}` + "set welcome <channel>")
        .addField("Bye", "Set a bye channel. Usage " + `${prefix}` + "set bye <channel>")
		message.channel.send(list) 
  } else {
        let embed = new Discord.RichEmbed()
        .setColor("FF5757")
        .setTitle("Enter a value to set, type " + `${prefix}` + "set list to show all values")
        message.channel.send(embed)
    }
}

module.exports.help = {
    name: "set",
    description: "Set a config var, Eg. welcome and bye channel",
    usage: "set <welcome/bye> <channel>",
    type: "Moderation" 
}