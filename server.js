const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://meahoo.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const math = require('math-expression-evaluator'); 
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(process.env.BOT_TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/////[ STATUS ]////

////////////////
/*
- All Copy Right Reserved For MoJRemGames 2019 ©

- Link Youtube: https://www.youtube.com/channel/UCXPZXoxluPjdK-wVvRPBrvw

- Link Discord: https://discord.gg/86AquZH
*/
///////////////
/*
بـدايـــة الأكـــواد مـــن هـــنـــا
------------------------

يـــاض يــا عـــلــق لــو لــقــيــتــك بــتــســتــغــل الــشــرح للـــبــيــع
                       +
هــعــمــلــك قـــضـــيــة كـــبـــيـــرة أوي أوي أوي  بــالنـــوص هــــاا

-------------------------
*/

/*
*--------------------------------**
*/

////////////////////////////////////

client.on("message", function(message) {
   if(message.content.startsWith(prefix + "help")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setTitle(":robot: ⊃ BOT HELP Menu :")
    .setDescription(`**
      > ╸ 🌍 ┞ ● Public Commands <a:x3:669831450014777344> الاوامر العامه
      
      > ╸ 👑 ┞ ● Admin Commands <a:x3:669831450014777344> الاوامر الإدارية
    
      > ╸ 🎮 ┞ ● Games Commands <a:x3:669831450014777344> اوامر الألعاب
     
      > ╸ 🌀 ┞ ● Orders Commands <a:x3:669831450014777344> الأوامر المميزة
     
      > ╸ 🔒 ┞ ● Protection Commands <a:x3:669831450014777344> أوامر الحماية
   **`)
    .setFooter('All Copy Right Reserved For: MoJRemGames | MG - 2019')
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('🌍')
        msg.react("👑")
        msg.react("🎮")
        msg.react("🌀")
        msg.react("🔒")
.then(() => msg.react('🌍'))
.then(() =>msg.react('👑'))
.then(() => msg.react('🎮'))
.then(() => msg.react('🌀'))
.then(() => msg.react('🔒'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🌍' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '👑' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
let reaction4Filter = (reaction, user) => reaction.emoji.name === '🌀' && user.id === message.author.id;
let reaction5Filter = (reaction, user) => reaction.emoji.name === '🔒' && user.id === message.author.id;
      
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 18000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 16000 });
let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 14000 });
let reaction5 = msg.createReactionCollector(reaction5Filter, { time: 12000 });
reaction1.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`**
<a:x4:669851082733912064> | __ Public Commands - اوامر عامة __

> 〔 -avatar 〕 ⇰ 『 لعرض صورتك في السيرفر 』

> 〔 -image 〕 ⇰ 『 لعرض صورة السيرفر 』

> 〔 -server 〕 ⇰ 『 معلومات عن السيرفر 』

> 〔 -user 〕 ⇰ 『 معلومات عنك 』

> 〔 -allbots 〕 ⇰ 『 لمعرفة كم بوت في سيرفرك 』

> 〔 -count 〕 ⇰ 『 لمعرفة عدد الاشخاص في سيرفرك 』

> 〔 -credits 〕 ⇰ 『 لرؤية الكريدت الخاص بك 』

> 〔 -daily 〕 ⇰ 『 لاخذ حصتك اليومية من الكريدت 』

> 〔 -credits  @user 〕 ⇰ 『 لتحويل الكريدت الي شخص اخر 』
**
> __By ==> [ !  - L U X Y.:black_heart:L ]__
`)
   message.author.sendEmbed(embed)
})
reaction2.on("collect", r => {
      const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`**
<a:x5:669851115939954698> | __ Admin Commands - اوامر ادارية : __

> 〔 -ban 〕⇰ 『 لاعطاء شخص بان من السيرفر 』

> 〔 -unban ID 〕⇰ 『 لفك الباند عن عضو 』

> 〔 -kick 〕⇰ 『 لاعطاء شخص كيك من السيرفر 』

> 〔 -mute 〕⇰ 『 لاعطاء شخص ميوت 』

> 〔 -unmute 〕⇰ 『 لفك الميوت عن الشخص 』

> 〔 -setnick 〕⇰ 『 لتغيير نيك نيم عضو 』

> 〔 -mc 〕⇰ 『 لقفل الشات 』

> 〔 -uc 〕⇰ 『 لفتح الشات 』

> 〔 -ct 〕⇰ 『 لانشاء روم كتابي 』

> 〔 -cv 〕⇰ 『 لانشاء روم صوتي 』

> 〔 -dch 〕⇰ 『 لمسح روم كتابي 』

> 〔 -uptime 〕⇰ 『 لمعرفه كم صار البوت شغال 』

> 〔 -clear 〕⇰ 『 مسح عدد معين من الشات 』

> 〔 -moveall 〕⇰ 『 لسحب جميع الاعضاء الي رومك الصوتي 』

> 〔 -infoinv + حروف الدعوة 〕⇰ 『 معرفة عن رابط الدعوة 』
**

> __By ==> [ !  - L U X Y.:black_heart:L ]__
`)
   message.author.sendEmbed(embed)
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`**
:dart: | __  Games Commands - اوامر الالعاب : __ 

> 〔 -هل تعلم 〕⇰ 『 لعبة هل تعلم 』

> 〔 -كت تويت 〕⇰ 『 لعبة كت تويت 』

> 〔 -لو خيروك 〕⇰ 『 لعبة لو خيروك 』

> 〔 -عقاب 〕⇰ 『 لعبة عقاب 』

> 〔 -مريم 〕⇰ 『 لعبة مريم 』

> 〔 -احزر 〕⇰ 『 لعبة احزر 』
**

> __By ==> [ !  - L U X Y.:black_heart:L ]__
`)
   message.author.sendEmbed(embed)
})
      reaction4.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`**
<a:x6:669863191139844125> | __ Speacial Commands - اوامر المميزة __ 

> 〔 -make 〕⇰ 『 لعمل الوان في السيرفر 』

> 〔 -color 〕⇰ 『 لاختيار لونك في السيرفر 』

> 〔 -ping 〕⇰ 『 لعرض سرعة البوت 』

> 〔 -roll 〕⇰ 『 لعمل قرعه 』

> 〔 -cal 〕⇰ 『 للستخدام الاله الحاسبة 』

> 〔 -say 〕⇰ 『 لقول شيء عن طريق البوت 』

> 〔 -embed 〕⇰ 『 لوضع شيء في ايمبيد او اطار 』
**

> __By ==> [ !  - L U X Y.:black_heart:L ]__
`)
  message.author.sendEmbed(embed)
})
reaction5.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`**
<a:x7:669873017014452234> | __ Protection Commands - اوامر الحمايه : __

> 〔 -antibots on 〕⇰ 『 لتفعيل مانع دخول البوتات 』

> 〔 -antibots off 〕⇰ 『 لايقاف مانع دخول البوتات 』

> 〔 -settings limitsban 〕⇰ 『 لوضع اقصي عدد للباند 』

> 〔 -settings limitskick 〕⇰ 『 لوضع اقصي عدد للطرد 』

> 〔 -settings limitsroleC 〕⇰ 『 لوضع اقصي عدد لانشاء رتب 』

> 〔 -settings limitsroleD 〕⇰ 『 لوضع اقصي عدد لمسح رتب 』

> 〔 -settings limitschannelD 〕⇰ 『 لوضع اقصي عدد لمسح رومات 』

> 〔 -settings limitstime 〕⇰ 『 لوضع اقصي وقت لتنفيذ العقوبة 』
**

> __By ==> [ !  - L U X Y.:black_heart:L ]__
`)
   message.author.sendEmbed(embed)
})
    })
}
});



/////////////////////////



client.on('message', message => { 
    const mm = message.mentions.members.first() || message.member;
    if(message.content.startsWith(prefix + "avatar")){
        const embed = new Discord.RichEmbed()
        .setAuthor(mm.user.tag, mm.user.avatarURL)
        .setTitle("Avatar Link")
        .setURL(mm.user.avatarURL)
        .setImage(mm.user.avatarURL)
        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed);
    }
});


client.on('message' , message => {
if(message.content.startsWith("-user")) {
    let user = message.mentions.users.first() || message.author;
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    message.delete();//by aboroh
    let game;
    if (user.presence.game === null) {//by aboroh
        game = 'No Playing....';
    } else {//LuXy-SaAd
        game = user.presence.game.name;
    }//LuXy-SaAd
    let messag;
    if (user.lastMessage === null) {//by aboroh
        messag = 'لم يرسل رسالة. ';
    } else {//by aboroh
        messag = user.lastMessage;
    }//LuXy-Saad
    let status;
    if (user.presence.status === 'online') {//LuXy-Saad
        status = ':green_heart:';
    } else if (user.presence.status === 'dnd') {//LuXy-SaAd
        status = ':heart:';
    } else if (user.presence.status === 'idle') {//LuXy-Saad
        status = ':yellow_heart:';
    } else if (user.presence.status === 'offline') {//LuXy-Saad
        status = ':black_heart:';
    }
    if (user.presence.status === 'offline') {//LuXy-SaAd
        stat = 0x000000;
    } else if (user.presence.status === 'online') {//LuXy-SaAD
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {//LuXy-SaAD
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {//LuXy-SaAD
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('**UserInfo:**', `**name:** ${user.username}#${user.discriminator}\n**JoinedDiscord:** ${joineddiscord}\n**LastMessage:** ${messag}\n**Status:** ${game}\n**playng:** ${status}\n**Bot?** ${user.bot}`, true)
  .setThumbnail(user.displayAvatarURL)
  .addField(`Roles:`, message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .addField('DiscordInfo:', `**Discriminator:** #${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`)
  .setAuthor(`Info ${user.username}`, user.displayAvatarURL)
  .setColor(stat);
    message.channel.send({embed})//LuXy-SaAD
  .catch(e => logger.error(e));
}
 });//LuXy-SaAd




client.on('message', message => {
       if(message.content === prefix + "mc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات __ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "uc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});




client.on("message", (message) => {
let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "ct") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});

client.on("message", (message) => {
     let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "cv") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
message.channel.sendMessage('تم انشاء روم صوتى')
}
});

client.on("message", (message) => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "dch") {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**هذة لييست روم كتابية حاول مرة اخري -_-**').catch(console.error);
        channel.delete()
    }
});

client.on('message', bz => {
                        let args = bz.content.split(" ").slice(1).join(" ")
if(bz.content.startsWith(prefix + 'make')) {
    if(!args) return bz.channel.send('`من فضلك اختار عدد الالوان`');
             if (!bz.member.hasPermission('MANAGE_ROLES')) return bz.channel.sendMessage('`** `[MANAGE_ROLES]` !**'); 
              bz.channel.send(`**Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            bz.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == prefix+'color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});

client.on('message' , ReBeL => {
if(ReBeL.author.bot) return;
if(ReBeL.channel.type == 'dm') return;
if(ReBeL.content.startsWith(prefix + "deleteroles")) {
ReBeL.guild.roles.filter(rebel => isNaN(rebel)).forEach(codes => codes.delete())
}
});

client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`");

}
});



client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command == "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها ??```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});//luxy-saad-gl

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('حط رقم معين يتم السحب منه');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.on('message', async message => {
  if(message.content.startsWith(prefix + "temyyyyyyyp")) {
    await message.channel.send("ارسل اسم الروم").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()

  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت")
    }, Math.floor(time*60000))
    
  })
  e.edit("تم انشاء الغرفه استمتع")

})
})
})
})
})

  }
})

client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)  .catch(console.error);

    }
};
});

 var spee={};
var fox="-";
let pointsfox= {}
const foxt = [
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055751447773195/bandicam_2019-07-16_14-38-25-841.jpg",
        "answers": ["البرازيل"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055755080302593/bandicam_2019-07-17_17-14-28-589.jpg",
        "answers": ["بلجيكا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055760180576276/bandicam_2019-07-17_17-15-04-686.jpg",
        "answers": ["فرنسا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055761467965452/bandicam_2019-07-17_17-15-42-926.jpg",
        "answers": ["كرواتيا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055764542390287/bandicam_2019-07-17_17-16-28-291.jpg",
        "answers": ["برتغال"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055766576889863/bandicam_2019-07-17_17-16-42-901.jpg",
        "answers": ["سنغال"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055769399525394/bandicam_2019-07-17_17-16-57-102.jpg",
        "answers": ["سعودية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055772377350165/bandicam_2019-07-17_17-17-17-663.jpg",
        "answers": ["المانيا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055773421862913/bandicam_2019-07-17_17-17-37-828.jpg",
        "answers": ["المكسيك"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055773761732619/bandicam_2019-07-17_17-17-52-326.jpg",
        "answers": ["ارغواي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055830451683359/bandicam_2019-07-17_17-18-00-272.jpg",
        "answers": ["صربيا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055832704155658/bandicam_2019-07-17_17-18-20-074.jpg",
        "answers": ["مصر"]
       
    }
];
 
client.on('message', foxm => {
if (!pointsfox[foxm.author.id]) pointsfox[foxm.author.id] = { ///LuXy-SaAD
    points: 0,
  };
  if(!foxm.guild) return;
    let id = foxm.author.id
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) { ///LuXy-SaAD
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    foxm.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( foxm.content == fox+'احزر'){
       
        try{
}catch(e){ ///LuXy-SaAD
 
}
 
    if(!foxm.channel.guild) return foxm.reply('**هذا الأمر للسيرفرات لا تستعملة بالخاص لا تكررة بعد تمام**').then(m => m.delete(3000)); ///By KillerFox and MEDSPORT
 
 
const foxitem = foxt[Math.floor(Math.random() * foxt.length)];
const foxfilter = response => {  
    return foxitem.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
foxm.channel.send('**بدات اللعبة**').then(msg => {
 
 const embeda7zr = new Discord.RichEmbed()
 .setColor("RANDOM")
     .setAuthor(`اكتب اجابة صحيحة لديك 15 ثانية`)
          .setImage(`${foxitem.type}`)
 .setFooter(`${foxm.author.tag}`, foxm.author.avatarURL) ///By KillerFox and MEDSPORT
 
 
         
foxm.channel.send(embeda7zr).then(() => {
        foxm.channel.awaitMessages(foxfilter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const foxyembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription('** احسنت حصلت علئ نقطة**') ///By KillerFox and MEDSPORT
   .setFooter(`${collected.first().author}`)
  foxm.channel.sendEmbed(foxyembed);
            let won = collected.first().author;
            pointsfox[won.id].points++; ///By KillerFox and MEDSPORT
          })
          .catch(collected => {
            foxm.channel.send(`:x: |**خلص الوقت لا تستسلم**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
   
   
    }
  });


const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   '*** اهلا بك ! انا تائهه في هذا المكان  ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
	 '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('-مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});

var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس??رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**????تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith("-عقاب")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('Flash Bot' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});



const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
}); //ينطبق علي اللي فوق برضو تمم



client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "infoinv")) {
    if(!args) return message.reply('**حدد اسم دعوة**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - صاحب الدعوة',inv.inviter,true)
      .addField('# - روم الدعوة',inv.channel,true)
      .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
      .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});

 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا من فضلك تكلم مع الادارة `');
   
       
    }
})

 client.on('message', message => {
    if(message.content.startsWith(prefix + 'moveall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });



client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('<a:x1:669825119904071691> **-** **This command only for servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send("<a:x1:669825119904071691> **-** **You Don't Have ` MANAGE_ROLES ` Permission**");
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send("<a:x1:669825119904071691> **-** **I Don't Have ` MANAGE_ROLES ` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      let embed = new Discord.RichEmbed()
       .setImage("https://5.top4top.net/p_14102aq7q1.png")
    if(!tomute) return message.channel.sendEmbed(embed);
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send("<a:x1:669825119904071691> **-** **Sorry I Don't Have ` MANAGE_MESSAGE ` Permission");
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.channel.send("<a:x1:669825119904071691>  This Time Is Incorrect");
  
    await(tomute.addRole(muterole.id));
    message.channel.send("<a:x2:669825119492767745> **-** **has been muted !** :zipper_mouth:");
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
 if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("<a:x1:669825119904071691> **-** **You Don't Have Permission For Unmute This User.").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("<a:x1:669825119904071691> **-** **I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("<a:x1:669825119904071691> **-** **I can't find this member**");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("<a:x1:669825119904071691 **-** **This user not muted**")

  await toMute.removeRole(role)
  message.channel.sendMessage("<a:x2:669825119492767745> **-** **Done unmuted.**");

  return;

  }


});

client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// +say
  if (command === "say") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
          message.delete()
    message.channel.sendMessage(args.join(" "))
  }
  
 

if (command == "embed") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_MESSAGES`' );
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
    
  }


});

client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move @user``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("?")
 }}});
 

    


client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content == prefix + 'allbots') {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

client.on('message', function(msg) {
    const prefix = '-'
    if(msg.content == prefix  + 'server') {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}**`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m => m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

 client.on('message', message => {
    if (message.content == prefix + "bot") {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ - ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | ! - L U X Y')
    })
}
});



client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-count')
	 
      message.reply(`**${message.guild.memberCount}**`);
    });

client.on('message', async message => {
 
if(message.content ==  prefix + 'invite') {
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.RichEmbed()
            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
            .setThumbnail(client.user.avatarURL)
            .addField('**الدعوات**', `**➥** [ شخص **${Number(inviteCount)}** ]`)
            .addField('**تم الانضمام للسيرفر من**', `**➥** [ يوم **${daysJoined.toFixed(0)}** ]`)
            .addField('**رابط دعوة الانضمام**', `**➥** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
            });
    };
});



 client.on('message', message => {
     if (message.content === "-support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .addField(" **سيرفر الدعم الفني للبوت**" , "  **https://discord.gg/qvwBpTq**")
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
  if (true) {
if (message.content === '-inv') {
      message.author.send('  |  تفضل رابط البوت').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', luxy => {
if(luxy.author.bot) return;
if(luxy.content === '-inv') {
luxy.channel.send('<a:x2:669825119492767745> **-** **تــم ارســال الــرابــط خــاص**');
}
});

//Funny Commands!!


//////////////

var Enmap = require('enmap');
client.antibots = new Enmap({name: "antibot"});
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
var prefix = "-";
if(codes.content == prefix + "antibots on") {
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: 'On'
});
 
 
codes.channel.send("AntiBots Join ON <a:x2:669825119492767745>");
}
if(codes.content == prefix + "antibots off") {
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: "Off"
});
codes.channel.send("AntiBots Join OFF <a:x2:669825119492767745>");
}
});
 
julian.on("guildMemberAdd", member => {
if(!antibots.get(`${member.guild.id}`)) { antibots.set(`${member.guild.id}`, {
onoff: "Off"
});
}
if(antibots.get(`${member.guild.id}`).onoff == "Off") return;
if(member.user.bot) return member.kick()
});



client.on('messageDelete', message => {
  if(message.channel.type === 'dm') return;
  if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
  var logChannel = message.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
  message.guild.fetchAuditLogs().then(logs => {
    var by = logs.entries.first().executor.id;
    let msg = `\`\`\`${message}\`\`\``
    if(msg == '```') return;
  let messageDelete = new Discord.RichEmbed()
  .setColor('#36393e')
  .setDescription(`**:wastebasket: Message Deleted, sent by <@${message.author.id}> In : <#${message.channel.id}>**\n${msg}`)
  .setTimestamp()
  logChannel.send(messageDelete);
  })
});
client.on('messageUpdate', (oldMessage, newMessage) => {
  if(!oldMessage.channel.type === 'dm') return;
  if(oldMessage.author.bot) return;
  if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
  var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
  let omsg = `\`\`\`${oldMessage}\`\`\``
  let nmsg = `\`\`\`${newMessage}\`\`\``
  if(omsg == nmsg) return
  let messageUpdate = new Discord.RichEmbed()
  .setColor('#36393e')
  .addField(`**OLD**`,`${omsg}`)
  .addField(`**NEW**`,`${nmsg}`)
  .setDescription(`**:warning: Message edited,** sent by <@${oldMessage.author.id}> In : <#${oldMessage.channel.id}>`)
  .setTimestamp()
  logChannel.send(messageUpdate);
});
client.on('roleCreate', role => {
  if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  var log = role.guild.channels.find(c => c.name === 'log');
  if(!log) return;
  role.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      let roleCreate = new Discord.RichEmbed()
      .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033107635208193/563111847692337174.png`)
      .setDescription(`**:fleur_de_lis: New Role has been created,\nRole : \`${role.name}\` :id: ${role.id}\nby : <@${userID}>**`)
      .setColor('#36393e')
      .setTimestamp()
      log.send(roleCreate);
  })
});
client.on('roleDelete', role => {
  if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  var log = role.guild.channels.find(c => c.name === 'log');
  if(!log) return;
  role.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      let roleDelete = new Discord.RichEmbed()
      .setDescription(`**:fleur_de_lis: Role has been deleted,\nRole : \`${role.name}\` :id: ${role.id}\nby : <@${userID}>**`)
      .setColor('#36393e')
      .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109178712074/563111850162520077.png`)
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL)
      log.send(roleDelete);
  })
});
///////////////
client.on('roleUpdate', (oldRole, newRole) => {
if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
var log = oldRole.guild.channels.find(c => c.name === 'log');
if(!log) return;
oldRole.guild.fetchAuditLogs().then(logs => {
var userID = logs.entries.first().executor.id;
if(oldRole.mystery) return;
let roleUpdate = new Discord.RichEmbed()
.setColor('#36393e')
.setAuthor(oldRole.guild.name,`https://cdn.discordapp.com/icons/${oldRole.guild.id}/${oldRole.guild.icon}.png?size=1024`)
.setDescription(`**${newRole} role has been updated by <@${userID}>**`)
.setTimestamp()
.setFooter(oldRole.guild.name)
if(oldRole.name !== newRole.name) roleUpdate.addField('**Old name**',`${oldRole.name}`,true)
if(oldRole.name !== newRole.name) roleUpdate.addField('**New name**',`${newRole.name}`,true)
if(oldRole.hexColor !== newRole.hexColor) roleUpdate.addField('**Old color**',`${oldRole.hexColor}`,true)
if(oldRole.hexColor !== newRole.hexColor) roleUpdate.addField('**New color**',`${newRole.hexColor}`,true)
if(oldRole.permissions !== newRole.permissions) {
  roleUpdate.addField('**Old prems**',oldRole.permissions,true)
  roleUpdate.addField('**New prems**',oldRole.permissions,true)
}
log.send(roleUpdate)
})
});
client.on('channelCreate', channel => {
  if(!channel.guild) return;
  if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  var log = channel.guild.channels.find(c => c.name === 'log');
  if(!log) return;
  channel.guild.fetchAuditLogs().then(logs => {
      var by = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL;
      let channelCreate = new Discord.RichEmbed()
      .setAuthor(channel.guild.name,`https://cdn.discordapp.com/icons/${channel.guild.id}/${channel.guild.icon}.png?size=1024`)
      .setDescription(`**\`${channel.name}\` Channel has been created..\n\nType: \`${channel.type}\`\n\nby <@${by}>**`)
      .setColor('#36393e')
      .setTimestamp()
      .setFooter(channel.guild.name,`https://cdn.discordapp.com/icons/${channel.guild.id}/${channel.guild.icon}.png?size=1024`)
     
      log.send(channelCreate);
  })
});
client.on('channelDelete', channel => {
  if(!channel.guild) return;
  if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  var log = channel.guild.channels.find(c => c.name === 'log');
  if(!log) return;
  channel.guild.fetchAuditLogs().then(logs => {
      var by = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL;
      let channelDelete = new Discord.RichEmbed()
      .setAuthor(channel.guild.name,`https://cdn.discordapp.com/icons/${channel.guild.id}/${channel.guild.icon}.png?size=1024`)
      .setDescription(`**\`${channel.name}\` Channel has been Deleted..\n\nType: ${channel.type}\n\nby <@${by}>**`)
      .setColor('#36393e')
      .setTimestamp()
      .setFooter(channel.guild.name,`https://cdn.discordapp.com/icons/${channel.guild.id}/${channel.guild.icon}.png?size=1024`)
 
      log.send(channelDelete);
  })
});

////
client.on('emojiCreate', emoji =>{
  var log = emoji.guild.channels.find(c => c.name === 'log');
  if(!log) return
  emoji.guild.fetchAuditLogs().then(logs => {
    var by = logs.entries.first().executor.id;
 
    let ee = new Discord.RichEmbed()
    .setColor('#36393e')
    .setThumbnail(`https://cdn.discordapp.com/emojis/${emoji.id}.png`)
    .setDescription(`**{ ${emoji} } has been added to the emoji list\n:id: \`${emoji.id}\`\n\nby <@${by}>**`)
    .setTimestamp()
    .setFooter(emoji.guild.name,`https://cdn.discordapp.com/icons/${emoji.guild.id}/${emoji.guild.icon}.png?size=1024`)
    log.send(ee);
  })
});
client.on('emojiDelete', emoji =>{
  var log = emoji.guild.channels.find(c => c.name === 'log');
  if(!log) return
  emoji.guild.fetchAuditLogs().then(logs => {
    var by = logs.entries.first().executor.id;
 
    let ee = new Discord.RichEmbed()
    .setColor('#36393e')
    .setThumbnail(`https://cdn.discordapp.com/emojis/${emoji.id}.png`)
    .setDescription(`**{ ${emoji} } has been removed from the emoji list\n:id: \`${emoji.id}\`\n\nby <@${by}>**`)
    .setTimestamp()
    .setFooter(emoji.guild.name,`https://cdn.discordapp.com/icons/${emoji.guild.id}/${emoji.guild.icon}.png?size=1024`)
    log.send(ee);
  })
});
//////
client.on('emojiUpdate', (oldEmoji,newEmoji) => {
  var log = oldEmoji.guild.channels.find(c => c.name === 'log');
  if(!log) return
  oldEmoji.guild.fetchAuditLogs().then(logs => {
    var by = logs.entries.first().executor.id;
    let emojiUpdate = new Discord.RichEmbed()
    .setColor('#36393e')
    .setThumbnail(`https://cdn.discordapp.com/emojis/${oldEmoji.id}.png`)
    .setDescription(`**{ ${oldEmoji} } Name has been updated!\n\nOLD: \`${oldEmoji.name}\`\n\nNEW: \`${newEmoji.name}\`\n:id: \`${oldEmoji.id}\`\n\nby <@${by}>**`)
    .setFooter(oldEmoji.guild.name,`https://cdn.discordapp.com/icons/${oldEmoji.guild.id}/${oldEmoji.guild.icon}.png?size=1024`)
    .setTimestamp()
    log.send(emojiUpdate)
  });
});
client.on('guildBanAdd', (guild, user) => {
  if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  var log = guild.channels.find(c => c.name === 'log');
  if(!log) return;
  guild.fetchAuditLogs().then(logs => {
      var by = logs.entries.first().executor.id;
      let banInfo = new Discord.RichEmbed()
      .setThumbnail(`${user.avatarURL}`)
      .setColor('#36393e')
      .setDescription(`**:airplane: User Banned,\n\nUser : <@${user.id}> :id: ${user.id}\n\nBy : <@${by}>.**`)
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL)
      log.send(banInfo);
  })
});
client.on('guildBanRemove', (guild, user) => {
  if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
  var logChannel = guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL;
 
      let unBanInfo = new Discord.RichEmbed()
      .setThumbnail(`${user.avatarURL}`)
      .setColor('#36393e')
      .setDescription(`**:airplane_arriving: User UnBanned,\n\nUser : <@${user.id}> :id: ${user.id}\n\nBy : <@${userID}>.**`)
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL)
 
      logChannel.send(unBanInfo);
  })
});
client.on('guildUpdate', (oldGuild, newGuild) => {
  if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
  var log = newGuild.channels.find(c => c.name === 'log');
  if(!log) return;
  oldGuild.fetchAuditLogs().then(logs => {
var by = logs.entries.first().executor.id;
let guild = new Discord.RichEmbed()
.setAuthor(newGuild.name,`https://cdn.discordapp.com/icons/${newGuild.id}/${newGuild.icon}.png?size=1024`)
.setDescription(`**Guild Has Been Updated by <@${by}>**`)
.setTimestamp()
if(oldGuild.name !== newGuild.name) {
guild.addField('**Old name**',oldGuild.name,true)
guild.addField('**New name**',newGuild.name,true)
}if(oldGuild.region !== newGuild.region) {
guild.addField('**Old Region**',oldGuild.region,true)
guild.addField('**New Region**',newGuild.region,true)
}if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
  guild.addField('**Old verification level**',oldGuild.verificationLevel,true)
  guild.addField('**New verification level**',newGuild.verificationLevel,true)
}if(oldGuild.iconURL !== newGuild.iconURL) {
guild.addField('**Changing the server photo to:**',`** **`)
guild.setImage(`https://cdn.discordapp.com/icons/${newGuild.id}/${newGuild.icon}.png?size=1024`)
}
if(oldGuild.afkChannel !== newGuild.afkChannel) {
  guild.addField('**Old Afk Channel**',oldGuild.afkChannel,true)
  guild.addField('**New Afk Channel**',newGuild.afkChannel,true)
}
if(oldGuild.systemChannel !== newGuild.systemChannel) {
guild.addField('**Old System Channel**',oldGuild.systemChannel,true)
guild.addField('**New System Channel**',newGuild.systemChannel,true)
}
if(oldGuild.afkTimeout !== newGuild.afkTimeout) {
guild.addField('**Old AfkTimeout**',oldGuild.afkTimeout,true)
guild.addField('**New AfkTimeout**',newGuild.afkTimeout,true)
}
log.send(guild)
  })
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
var log = oldMember.guild.channels.find(c => c.name === 'log');
if(!log) return;
oldMember.guild.fetchAuditLogs().then(logs => {
var by = logs.entries.first().executor.id;
let member = new Discord.RichEmbed()
.setAuthor(oldMember.guild.name,`https://cdn.discordapp.com/icons/${newMember.guild.id}/${newMember.guild.icon}.png?size=1024`)
.setDescription(`**${newMember} has been updated by <@${by}>**`)
.setFooter(oldMember.guild.name,`https://cdn.discordapp.com/icons/${newMember.guild.id}/${newMember.guild.icon}.png?size=1024`)
.setTimestamp()
if(oldMember.nickname !== newMember.nickname) {
member.addField('**Old nickname**',oldMember.nickname,true)
member.addField('**New nickname**',newMember.nickname,true)
}if(oldMember.roles.size < newMember.roles.size) {
let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
member.addField('**Changed roles**',`**${role} ✅**`)
}if(oldMember.roles.size > newMember.roles.size) {
let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
member.addField('**Changed roles**',`**${role} ⛔**`)}
log.send(member)
})
});
client.on('guildMemberAdd', member => {
var logChannel = member.guild.channels.find(c => c.name === 'log');
if(!logChannel) return;
 
let newMember = new Discord.RichEmbed()
.setThumbnail(member.user.avatarURL)
.setColor('#36393e')
.setDescription(`**<@${member.user.id}> has joined the server :large_orange_diamond:\n\n:timer: account created:\n\`${Days(member.user.createdAt)}\`.**`)
.setTimestamp()
 
logChannel.send(newMember);
});
function Days(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}
client.on('guildMemberRemove', member => {
var logChannel = member.guild.channels.find(c => c.name === 'log');
if(!logChannel) return;
 
let leaveMember = new Discord.RichEmbed()
.setThumbnail(member.user.avatarURL)
.setColor('#36393e')
.setDescription(`**<@${member.user.id}> has left the server :large_blue_diamond:**`)
.setTimestamp()
 
logChannel.send(leaveMember);
});



 client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send('<a:rj:601337828122558468>| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send('<a:x1:669825119904071691>| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(` **من فضلك اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send('<a:x1:669825119904071691> | **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit('**اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send('<a:x1:669825119904071691 | **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit('**واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                    let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز: هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`<a:x2:669825119492767745> | **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`<a:x1:669825119904071691> | **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});



client.on('guildCreate', (guild) => {

   
       let channel = client.channels.get(guild.channels.filter(c => c.permissionsFor(client.user).has("SEND_MESSAGES") && c.type === "text").map(r => r.id)[0]) 
        
       channel.send("**لمعرفة الاوامر الخاصه بالبوت اكتب** ``-help``")

});//LuXy-SaAD

//games
  const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("-كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('Flash Bot' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
//games2
const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("-لو خيروك")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('Flash Bot' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
//3aga2eb



client.on('message', message => {
    if (message.author.bot) return
    if (!message.guild) return message.reply('**This Command Just In Servers**')
    if (message.content === prefix + 'top-servers') {
      const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
      message.channel.sendMessage(`**⇏ Top 15 Servers: **\n~~-------------------------------------------~~\n1. **${top[0].name}**: ${top[0].memberCount} \n2. **${top[1].name}**: ${top[1].memberCount}.\n3. **${top[2].name}**: ${top[2].memberCount}.\n4. **${top[3].name}**: ${top[3].memberCount}.\n5. **${top[4].name}**: ${top[4].memberCount}.\n6. **${top[5].name}**: ${top[5].memberCount}.\n7. **${top[6].name}**: ${top[6].memberCount}.\n8. **${top[7].name}**: ${top[7].memberCount}.\n9. **${top[8].name}**: ${top[8].memberCount}.\n10. **${top[9].name}**: ${top[9].memberCount} .\n11. **${top[10].name}**: ${top[10].memberCount} .\n12. **${top[11].name}**: ${top[11].memberCount} .\n13. **${top[12].name}**: ${top[12].memberCount} .\n14. **${top[13].name}**: ${top[13].memberCount} .\n15. **${top[14].name}**: ${top[14].memberCount} .\n~~-------------------------------------------~~`)
    }
});


client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(args == 'allllll') {message.guild.fetchBans().then(zg => {
  zg.forEach(Saad => {message.guild.unban(Saad);})});
  return message.channel.send('**✅ Unbanned all members **')}
  if(!args) return message.channel.send('**Please Type the member ID**');
  message.guild.unban(args).then(m =>{message.channel.send(`<a:x2:669825119492767745> **-** **Done Unbanned ${m.username}**`);
  }).catch(stry =>{message.channel.send(`<a:x1:669825119904071691> **-** **I can't find \`${args}\` in the ban list**`)});
  }});


client.on("message", message => {
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`⛔ | I cant change **${user.user.username}**'s nickname because his role highest than my role!`);
message.guild.member(user.user).setNickname(`${nick}`).then(() => {
message.channel.send(`Successfully changed **${user.user.username}** nickname to **${nick}**`)
}).catch(console.error); // Toxic Codes
} // Julian
}); // Codes



    client.on('message', message => {
      if (message.author.x5bz) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command == "ban") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      /*let b5bzlog = client.channels.find("name", "5bz-log");
     
      if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user)
      .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
     
      message.guild.member(user).ban(7, user);
     
      const banembed = new Discord.RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({
        embed : banembed
      })
    }
    });

 client.on('message', message => {
      if (message.author.kick) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command == "kick") {
                   if(!message.channel.guild) return;
             
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
     
      if (message.mentions.users.size < 1) return message.reply("منشن شخص");
      if(!reason) return message.reply ("اكتب سبب الطرد");
      if (!message.guild.member(user)
      .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
     
      message.guild.member(user).kick(7, user);
     
      const banembed = new Discord.RichEmbed()
      .setAuthor('Kicked !', user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("User:",  `[ + ${user.tag} + ]`)
      .addField("By:", `[  + ${message.author.tag} +  ]`)
      .addField("Reason:", `[ + ${reason} +  ]`)
      client.channels.get("492583022982463500").send({embed : banembed})
    }
    });
///////////////////


const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();
 
client.on("message", message => {
 const args = message.content.split(' ');
  const credits = require('./creditsCode.json');
  const path = './creditsCode.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
  }
 
  }
        if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
       credits[message.author.id].daily = moment().format('L');
           
 
          let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250);
          credits[author].credits += ammount;
       
       
          message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
        fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
            if (e) throw e;
        })
 
      }else{
      message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
      }
   
        }
         
   
 
});//LuXy

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong | :ping_pong: ').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });

///////////////////
const adminprefix = ".";
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});


/////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {
 
 
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
 
})
///Uploaded By L U X Y