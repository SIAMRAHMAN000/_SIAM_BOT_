module.exports.config = {
    name: "prefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SIAM RAHMAN",
    description: "See the bot prefix",
    commandCategory: "For admin",
    usages: "",
    cooldowns: 5,
  };
  
  module.exports.handleEvent = async ({ event, api, Threads }) => {
    var { threadID, messageID, body, senderID } = event;
    //if (senderID == global.data.botID) return;
    if ((this.config.credits) != "SIAM RAHMAN") { return api.sendMessage(`Changed credits!`, threadID, messageID)}
    function out(data) {
      api.sendMessage(data, threadID, messageID)
    }
    var dataThread = (await Threads.getData(threadID));
    var data = dataThread.data; 
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  
    var arr = ["prefix"];
    arr.forEach(i => {
      let str = i[0].toUpperCase() + i.slice(1);
      if (body === i.toUpperCase() | body === i | str === body) {
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
        if (data.PREFIX == null) {
          return out(`️️️️️️️️️️️️️️️️️️️️️️️️️🤓PRIFIX🤓 ==> ✅[ ${prefix} ]✅ \n - { SIAM RAHMAN }`)
        }
        else return out(`️️️️️️️️️️️️️️️️️️️️️️️️️✅PREFIX✅ ==> `    + data.PREFIX,  "- { SIAM RAHMAN }" )
      }
  
    });
  };
  
  module.exports.run = async({ event, api }) => {
      return api.sendMessage(`️️️️️️️️️️️️️️️️️️️️️️️️️✅PREFIX ==> [ ${global.config.PREFIX} ]✅`, event.threadID)
        }