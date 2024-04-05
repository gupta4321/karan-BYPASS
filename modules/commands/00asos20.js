const fs = require("fs");
module.exports.config = {
	name: "👙",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
  usePrefix:true,
	commandCategory: "no prefix",
	usages: "💋",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("kiss dao")==0 || event.body.indexOf("pappi dao")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("ummmah")==0) {
		var msg = {
				body: "~ আর পারমু নাহ যাও,  সর এখান থেকে..!!",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }