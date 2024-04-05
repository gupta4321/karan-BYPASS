const fs = require("fs");
module.exports.config = {
	name: "🌃",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
  usePrefix:true,
	commandCategory: "no prefix",
	usages: "🌃",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("gd n8")==0 || event.body.indexOf("শুভরাত্রি")==0 || event.body.indexOf("good night")==0 || event.body.indexOf("Gd n8")==0) {
		var msg = {
				body: "~ ঘুমাবা নাকি জান, আচ্ছা ঘুমিয়ে পরো, সকাল এ কথা হবে, শুভ রাত্রি..!!",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }