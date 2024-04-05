const fs = require("fs");
module.exports.config = {
	name: "😘",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
  usePrefix:true,
	commandCategory: "no prefix",
	usages: "😘",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Ummah")==0 || event.body.indexOf("😘")==0 || event.body.indexOf("😘")==0) {
		var msg = {
				body: "~ লুচ্চা পোলা পান এখানে এসে চুমা চাপ্টি নাহ করে, পাঠ খেতে যাইয়া কর..😼🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/a/cummah.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }