const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


client.on('ready', async() => {
var server = "513004357223055361"; // ايدي السررفر
var channel = "513004416555679757";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})


const killer = "@";
const fox = ['id'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!fox.includes(message.author.id)) return;
    
if (message.content.startsWith(killer + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(killer + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(killer + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     // By Fox
if (message.content.startsWith(killer + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk"); // KillerFox
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
