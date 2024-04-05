const fs = require("fs");
module.exports.config = {
	name: "npx1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Romim", 
	description: "auto replay",
  useprefix:true,
	commandCategory: "no prefix",
	usages: "npx1",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😊")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("😔")==0 || event.body.indexOf("😞")==0) {
		var msg = {
				body: " → 𝐄𝐦𝐨𝐣𝐢 𝐄𝐯𝐞𝐧𝐭 𝐁𝐲 𝗥𝗢𝗠𝗜𝗠 •_•\n\n「 𝐀𝐢𝐬𝐚 𝐦𝐞𝐫𝐚 ✿︎ 𝐇𝐚𝐬𝐡𝐚𝐫 𝐡𝐚𝐲 𝐛𝐚𝐧𝐠𝐚𝐲𝐚 ✿︎ 」",
				attachment: fs.createReadStream(__dirname + `/noprefix/received_367716512428745.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😊", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }