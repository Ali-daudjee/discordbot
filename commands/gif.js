const fetch = require('node-fetch');
module.exports = async function (message, commandArr){
    //console.log(commandArr);
    let keywords = "nature";
    if (commandArr.length > 0) {
        keywords = commandArr.join(" ");
    }

        let url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        //console.log(commandArr);
        message.reply(json.results[index].url);
        message.channel.send("Tenor API GIF: " + keywords);
    }