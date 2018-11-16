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

client.on('ready', () => {
client.user.setGame(``,'https://www.twitch.tv/v5bz'); 
}); 

client.on('ready', async() => {
var server = "513004357223055361"; // ايدي السررفر
var channel = "513004416555679757";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
