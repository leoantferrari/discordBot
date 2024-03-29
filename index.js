const Discord = require("discord.js");
const client = new Discord.Client();
config = require("./config.json");
var help = ['./help.txt'];

client.on("ready", () => {


    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);


    client.user.setActivity(`Serving Lord Smith in ${client.guilds.size} servers`);

});


client.on("guildCreate", guild => {

    // This event triggers when the bot joins a guild.

    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);

    client.user.setActivity(`Serving Lord Smith in ${client.guilds.size} servers`);

});


client.on("guildDelete", guild => {

    // this event triggers when the bot is removed from a guild.

    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);

    client.user.setActivity(`Serving Lord Smith in ${client.guilds.size} servers`);

});


client.on("message", async message => {

    // This event will run on every single message received, from any channel or DM.


    // if the author of the message is a bot then ignore, to avoid botception.
    if (message.author.bot) return;


    if (message.content.indexOf(config.prefix) !== 0) return;


    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();


    if (command === "ping") {

        // Calculates ping between sending a message and editing it, giving a nice round-trip latency.

        // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)

        const m = await message.channel.send("Ping?");

        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);

    }


    if (command === "rainbow") {
        const embed = new Discord.RichEmbed().setColor(0x1D82B6);
        embed.setFooter(`Picture by Lord Smith`);
        const m = message.channel.send({embed: {color: 0x1D82B6, description: `RAINBOW`, file: "./rainbow.gif"}});
        m.edit({embed: {color: 0xf7dc6f, description: `RAINBOW`, file: "./rainbow.gif"}});
        /*message.channel.send("RAINBOW", {
          file: "./rainbow.gif" // Or replace with FileOptions object
      });*/

    }
    if (command === "random") {
        number = 11;
        imageNm = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send("random", {file: "./gifs/" + imageNm + ".gif"});
    }
    if (command === "say") {

        if (!message.member.roles.some(r => ["Polish one stop car shop", "Lord Emperor"].includes(r.name))) {

            return message.reply("Sorry, you don't have permissions to use this!");
        }
        if (message.member.roles.some(r => ["Lord Emperor"].includes(r.name))) {
            const sayMessage = args.join(" ");


            message.delete().catch(O_o => {
            });


            const embed = new Discord.RichEmbed().setColor(0xFF00FF);
            message.channel.send({embed: {color: 0xFF00FF, description: sayMessage}});
            //message.channel.send(sayMessage);
        }
        if (message.member.roles.some(r => ["Polish one stop car shop"].includes(r.name))) {
            const sayMessage = args.join(" ");

            // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.

            message.delete().catch(O_o => {
            });


            const embed = new Discord.RichEmbed().setColor(0x008000);
            message.channel.send({embed: {color: 0x008000, description: sayMessage}});

        }


    }
    if (command === "rasputin") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile('./rasputin.mp3');
                dispatcher.on("end", end => {
                    VC.leave()
                });
            })
            .catch(console.error)
    }
    if (command === "giveitup") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile('./giveitup.mp3');
                dispatcher.on("end", end => {
                    VC.leave()
                });
            })
            .catch(console.error)
    }
    if (command === "bang") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile('./bang.mp3');
                dispatcher.on("end", end => {
                    VC.leave()
                });
            })
            .catch(console.error);
    }
    if (command === "help") {
        const embed = new Discord.RichEmbed().setColor(0x1D82B6);
        message.channel.send({embed: {color: 0x1D82B6, description: ` help ${help}`}});
    }
    if (command === "bang") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile('./bang.mp3');
                dispatcher.on("end", end => {
                    VC.leave()
                });
            })
            .catch(console.error);
    }
    if (command === "terra") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile('./civ.mp3');
                dispatcher.on("end", end => {
                    VC.leave()
                });
            })
            .catch(console.error);
    }
    if (command === "chaos") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile('./chaos.mp3');
                dispatcher.on("end", end => {
                    VC.leave()
                });
            })
            .catch(console.error);
    }
    if (command === "cominghome") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile('./cominghome.mp3');
                dispatcher.on("end", end => {
                    VC.leave()
                });
            })
            .catch(console.error);
    }
    if (command === "purgesiren") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile('./purge.mp3');
                dispatcher.on("end", end => {
                    VC.leave()
                });
            })
            .catch(console.error);
    }
    if (command === "flamingo") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile('./flamingo.mp3');
                dispatcher.on("end", end => {
                    VC.leave()
                });
            })
            .catch(console.error);
    }

    if (command === "stop") {
        var VC = message.member.voiceChannel;
        VC.leave();
    }


    if (command === "purge") {

        // This command removes all messages from all users in the channel, up to 100.


        // get the delete count, as an actual number.

        const deleteCount = parseInt(args[0], 10);


        // Ooooh nice, combined conditions. <3

        if (!deleteCount || deleteCount < 2 || deleteCount > 100)

            return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");


        // So we get our messages, and delete them. Simple enough, right?

        const fetched = await message.channel.fetchMessages({limit: deleteCount});

        message.channel.bulkDelete(fetched)

            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

    }

});


client.login(config.token);