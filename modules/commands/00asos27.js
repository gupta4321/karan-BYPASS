const fs = require("fs");
module.exports.config = {
	name: "sigma rule2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ", 
	description: "lululuilu",
  usePrefix:true,
	commandCategory: "Romim",
	usages: "sigma2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💦")==0 || event.body.indexOf("🗿")==0 || event.body.indexOf("rule2")==0 || event.body.indexOf("sigma2")==0) {
		var msg = {
				body: "                       •—»💦«𝐏𝐫𝐞𝐟𝐢𝐱 𝐞𝐯𝐞𝐧𝐭 𝐛𝐲 𝐑𝐨𝐦𝐢𝐦»💦«—•           💦«┄┅════❁🗿❁════┅┄»💦        \nআমারে দেখতে বা বুঝতে   তোমার অনেক টাইম লাগবো!!🍒\n\n কারন আমারে দেখতে হলে তোমার দেখার যোগ্যতা থাকা লাগবে 🤙😉❄️\n\n     ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ                      •┄┅════❁👅❁════┅┄•                    «•••🅁🄾🄼🄸🄼•••»                                                             𝐏𝐫𝐞𝐟𝐢𝐱 : « * »                                                                🅴🆅🅴🅽🆃 :«SIGMA»                                                           🅁🄾🄼🄸🄼 🄱🄾🅃",
				attachment: fs.createReadStream(__dirname + `/noprefix/sm.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🗿", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }