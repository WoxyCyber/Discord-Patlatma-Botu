const conf = require("../botConfig.json")
module.exports.run = async (client, message, args) => {
    message.guild.members.cache.forEach(member => {
        member.timeout(4000, conf.reason);
    });
}
module.exports.help = {
    name: "allmute"
}