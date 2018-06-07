const Discord = require ("discord.js");
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
    bot.user.setGame(`on ${bot.guilds.size} servers!`)
});
bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .addField(`${member.user.username} a intrat in ${member.guild.name}`,":open_mouth:")
        .addField('Esti userul cu numarul', `${member.guild.memberCount}`)
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()
        channel.sendEmbed(embed);
  });
  
  
  bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setThumbnail(memberavatar)
        .addField(`${member.user.username} a iesit din ${member.guild.name}`," :sob:")
        .addField('Acum mai sunt doar'+` ${member.guild.memberCount}` + " useri", ":crying_cat_face:")
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()
  
        channel.sendEmbed(embed);
  });

bot.login('NDUzNTkxMDAyOTMwODcyMzIw.DfrZMQ.Dkgbfr_D6ruNKoDwx23JISK3yxA');
