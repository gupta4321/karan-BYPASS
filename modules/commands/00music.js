const fs = require('fs');
const ytdl = require('ytdl-core');
const { resolve } = require('path');
const axios = require('axios')
async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Thiếu link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 48 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
module.exports.config = {
    name: "music",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Romim",
    description: "Play music via YouTube link or search keyword",
  usePrefix:true,
    commandCategory: "Utilities",
    usages: "[searchMusic]",
    cooldowns: 0,
     envConfig: {
		"YOUTUBE_API": "AIzaSyAwzbcb-6QAzgZtl4qf3Z2GhQ3mqrbbMR8"
	}
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
    const axios = require('axios')
    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('Cannot send file because it is larger than 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
            body: `
♚═════  𝙼𝚄𝚂𝙸𝙲  ═════♚\n\n(🤍)𝚃𝙸𝚃𝙻𝙴: ${data.title}\n[🎥]𝙼𝚄𝚂𝙸𝙲 𝙲𝙷𝙰𝙽𝙴𝙻: ${data.author}\n[🕛]𝙼𝚄𝚂𝙸𝙲 𝚃𝙸𝙼𝙴: ${this.convertHMS(data.dur)}\n[👀] → 𝙻𝙾𝚃 𝚅𝙸𝙴𝚆:: ${data.viewCount}\n\n[🖤] →𝚅𝙸𝙳𝙴𝙾 𝙻𝙸𝙺𝙴: ${data.likes} 𝙻𝙸𝙺𝙴 𝙳𝙰𝚃𝙰- \n[⏱️]→  ${Math.floor((Date.now()- data.timestart)/1000)}\n\n𝚃𝙷𝙸𝚂 𝙼𝚄𝚂𝙸𝙲 𝙵𝙸𝙻𝙴 𝙱𝚈 𝚁4𝙼1𝙼`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)
            
    }
    catch (e) { return console.log(e) }
}
module.exports.run = async function ({ api, event, args }) {
  const YouTubeAPI = global.nodemodule["simple-youtube-api"];
  const youtube = new YouTubeAPI(global.configModule[this.config.name].YOUTUBE_API);
    if (args.length == 0 || !args) return api.sendMessage('» The search field cannot be left blank!', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await downloadMusicFromYoutube(args.join(" "), path);
            if (fs.statSync(path).size > 26214400) return api.sendMessage('Cannot send file because it is larger than 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
            return api.sendMessage({ 
                body: `♚═════  𝙼𝚄𝚂𝙸𝙲  ═════♚\n\n(🤍)𝚃𝙸𝚃𝙻𝙴: ${data.title}\n[🎥]𝙼𝚄𝚂𝙸𝙲 𝙲𝙷𝙰𝙽𝙴𝙻: ${data.author}\n[🕛]𝙼𝚄𝚂𝙸𝙲 𝚃𝙸𝙼𝙴: ${this.convertHMS(data.dur)}\n[👀] → 𝙻𝙾𝚃 𝚅𝙸𝙴𝚆:: ${data.viewCount}\n\n[🖤] →𝚅𝙸𝙳𝙴𝙾 𝙻𝙸𝙺𝙴: ${data.likes} 𝙻𝙸𝙺𝙴 𝙳𝙰𝚃𝙰- \n[⏱️]→  ${Math.floor((Date.now()- data.timestart)/1000)}\n\n𝚃𝙷𝙸𝚂 𝙼𝚄𝚂𝙸𝙲 𝙵𝙸𝙻𝙴 𝙱𝚈 𝚁4𝙼1𝙼`,
                attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)
            
        }
        catch (e) { return console.log(e) }
    } else {
          try {
           var link = [], msg = "", num = 1, l = [];
			let results = await youtube.searchVideos(keywordSearch, 10);
			for (const value of results) {
				if (typeof value.id !== 'undefined') {;
					link.push(value.id);
					msg += (`${num++}. ${value.title}\n`);
          const t = (await axios.get(`${value.thumbnails.high.url}`, {
        responseType: "stream"
      })).data;
    l.push(t)
				}
			}
            var body = `»🔎 𝐂𝐨́ ${link.length} 𝐤𝐞̂́𝐭 𝐪𝐮𝐚̉ 𝐭𝐫𝐮̀𝐧𝐠 𝐯𝐨̛́𝐢 𝐭𝐮̛̀ 𝐤𝐡𝐨𝐚́ 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦  𝐛𝐚̣𝐧:\n\n${msg}\n» 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐜𝐡𝐨̣𝐧 𝐦𝐨̣̂𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐮̛̃𝐧𝐠 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐭𝐫𝐞̂𝐧`
            return api.sendMessage({
              body: body,
              attachment: l
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('An error occurred, please try again shortly!!\n' + e, event.threadID, event.messageID);
        }
    }
}