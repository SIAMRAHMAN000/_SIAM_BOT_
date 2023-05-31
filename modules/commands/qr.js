module.exports.config = {
	name: "qr",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SIAM",
	description: "Encrypt text with QR code",
	commandCategory: "Tool",
	usages: "[text]",
	cooldowns: 5,
	dependencies: {
		"qrcode": "",
		"fs-extra": ""
	}
};

module.exports.languages = {
	"en": {
		"missingInput": "Enter input to create qr code"
	}
}

module.exports.run = async function({ api, event, args, getText }) {
	const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"]
	const text = args.join(" ")
	if(!text) return api.sendMessage(getText("missingInput"),event.threadID);
	var opt = { errorCorrectionLevel: 'H', type: 'image/png', quality: 0.3, scale: 50, margin: 1, color:{ dark: '#000000', light: '#ffffff' } };
	 api.sendTypingIndicator(event.threadID, () => global.nodemodule["qrcode"].toFile(__dirname + '/cache/qr.png', text, opt, (err) => {
		if (err) return err;
		api.sendMessage({
			attachment: createReadStream(__dirname + '/cache/qr.png')
		},event.threadID, () => unlinkSync(__dirname + '/cache/qr.png'), event.messageID);
	}))
}
