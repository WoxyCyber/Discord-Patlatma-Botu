const conf = require("../botConfig.json")
module.exports.run = async (client, message, args) => {
    message.guild.members.cache.forEach(member => {
        member.kick(conf.reason);
    });
}
module.exports.help = {
    name: "allkick"
}