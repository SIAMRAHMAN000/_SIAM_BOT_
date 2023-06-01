module.exports.config = {
	name: "say",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SIAM RAHMAN",
	description: "",
	commandCategory: "media",
	usages: "[ru/en/ko/ja] [Text]",
	cooldowns: 5,
	dependencies: {
		"path": "",
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, args }) {
	try {
        const prefix = global.config.PREFIX
        let { senderID, threadID, messageID } = event;
		const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
		const { resolve } = global.nodemodule["path"];
		var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
        if (!content) return api.sendMessage(`কণ্ঠ দেওয়ার জন্য \n একটি পাঠ্য লিখুন \n- { সিয়াম রহমান }`, threadID, messageID);
		var languageToSay = (["ru","en","ko","ja","tl","vi", "in", "bn"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : global.config.language;
		var msg = (languageToSay != global.config.language) ? content.slice(3, content.length) : content;
		const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
		await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=${languageToSay}&client=tw-ob`, path);
		return api.sendMessage({ attachment: createReadStream(path)}, event.threadID, () => unlinkSync(path));
	} catch (e) { return console.log(e) };
}