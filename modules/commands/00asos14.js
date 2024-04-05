const fs = require("fs");
module.exports.config = {
	name: "🌅",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
  usePrefix:true,
	commandCategory: "no prefix",
	usages: "🌅",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("gd mr9")==0 || event.body.indexOf("শুভ সকাল")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("God Morning")==0) {
		var msg = {
				body: "~ শুভ সকাল জ্যানু ত্যাহ এবার তো উটো..!!",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }