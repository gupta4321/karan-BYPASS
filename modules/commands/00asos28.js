const fs = require("fs");
module.exports.config = {
  name: "sigma rule",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ", 
  description: "lululuilu",
  usePrefix:true,
  commandCategory: "Romim",
  usages: "sigma",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("🗿")==0 || event.body.indexOf("👅")==0 || event.body.indexOf("rule")==0 || event.body.indexOf("sigma")==0) {
    var msg = {
        body: "•—»💦«𝐏𝐫𝐞𝐟𝐢𝐱 𝐞𝐯𝐞𝐧𝐭 𝐛𝐲 𝐑𝐨𝐦𝐢𝐦»💦«—•                      💦«┄┅════❁🗿❁════┅┄»💦 \n\nতোমার যদি আমারে দেখাও তোমার অ্যাটিটিউটের একখানি.👅.!\n\n তাইলে তুমি পাইবা আমার ইগনোরের দশখানি.🗿.\n\n আর ওইটা তুমি না নিতে পারলে তোমার মান সম্মান হয়ে যাবে হানি!!🗿👅\n\n                                           \nʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ                       •┄┅════❁🗿❁════┅┄•                    «•••🅁🄾🄼🄸🄼•••»                                                            𝐏𝐫𝐞𝐟𝐢𝐱 : « * »                                                               🅴🆅🅴🅽🆃 :«👅»                                                             🅁🄾🄼🄸🄼 🄱🄾🅃",
        attachment: fs.createReadStream(__dirname + `/noprefix/sg.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🗿", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }