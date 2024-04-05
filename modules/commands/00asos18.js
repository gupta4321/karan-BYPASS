const fs = require("fs");
module.exports.config = {
	name: "🔴",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
  usePrefix:true,
	commandCategory: "no prefix",
	usages: "কি করো",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("কি করো")==0 || event.body.indexOf("koro")==0 || event.body.indexOf("ki koro")==0) {
		var msg = {
				body: "~ এইতো তোমাদের সাথে আড্ডা দিচ্ছি, তোমরা কি করছো 🥰🥀",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }