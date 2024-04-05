const fs = require("fs");
module.exports.config = {
	name: "bye",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
  usePrefix:true,
	commandCategory: "no prefix",
	usages: "/out",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bye")==0 || event.body.indexOf("Allah Hafej")==0 || event.body.indexOf("Out")==0 || event.body.indexOf("bye")==0) {
		var msg = {
				body: " ~ বাই বাই জানে মান কলিজা ত্যাহ🥰🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/a/byebye.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }