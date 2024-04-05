const fs = require("fs");
module.exports.config = {
	name: "🖕",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
  usePrefix:true,
	commandCategory: "no prefix",
	usages: "🖕",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Amogus")==0 || event.body.indexOf("✌️")==0 || event.body.indexOf("🖕")==0) {
		var msg = {
				body: "~ আঙ্গুল দেখাও, আঙ্গুল তোমার হেডা দিয়ে ভরে দিম..!!🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/a/anguldekaw.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😾", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }