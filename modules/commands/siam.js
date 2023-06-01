const fs = require("fs");
module.exports.config = {
	name: "Siam",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SIAM RAHMAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Siam",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Siam")==0 || event.body.indexOf("siam")==0 || event.body.indexOf("@Skill siam")==0 || event.body.indexOf("@Skill Siam")==0) {
		var msg = {
				body: "যেকোনো প্রয়োজনে আমার বস এর সাথে যোগাযোগ করুন👇\nhttps://www.facebook.com/skillsiam1245",
				attachment: fs.createReadStream(__dirname + `/cache/siam.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👨‍💻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }