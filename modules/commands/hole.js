module.exports.config = {
	name: "hole",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SIAM RAHMAN", 
	description: "",
	commandCategory: "no prefix",
	usages: "hole",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hole")==0 || event.body.indexOf("HOLE")==0 || event.body.indexOf("gud")==0 || event.body.indexOf("Hole")==0 || event.body.indexOf("dhn")==0 || event.body.indexOf("DHN")==0 || event.body.indexOf("Dhn")==0 || event.body.indexOf("Dhon")==0 || event.body.indexOf("dhon")==0) {
		var msg = `8${'='.repeat(Math.floor(Math.random() * 10))}D`
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }