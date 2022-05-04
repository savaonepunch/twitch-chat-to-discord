const tmi = require('tmi.js');
const { Webhook } = require('discord-webhook-node');
const axios = require('axios').default;
const { token, clientId, webhook, channels } = require('./secrets.json');

const hook = new Webhook(webhook);

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: 'justinfan14124',
        password: 'whatever'
    },
    channels: channels
});

client.connect();

client.on("timeout", (channel, username, reason, duration, userstate) => {
    hook.setUsername('Timeout');
    const IMAGE_URL = "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_819621bcb8f44566a1bd8ea63d06c58f/static/light/3.0";
    hook.setAvatar(IMAGE_URL);

    hook.send(`*${username} has been timed out for ${duration} seconds.*`);
});

client.on("ban", (channel, username, reason, userstate) => {
    hook.setUsername('Banned LULW');
    hook.setAvatar("https://cdn.frankerfacez.com/emoticon/522895/4");

    hook.send(`**${username} was banned LULW no unbans MODS**`);
});

client.on("emoteonly", (channel, enabled) => {
    hook.setUsername('Emote Only');
    hook.setAvatar("https://static-cdn.jtvnw.net/emoticons/v2/120232/static/light/3.0");
    if (enabled) hook.send(`Chat is now in emote-only mode TriHard 7`);
    else {
        hook.setAvatar("https://static-cdn.jtvnw.net/emoticons/v2/134256/static/light/3.0");
        hook.send(`Chat is not in emote-only mode anymore`);
    }
});

client.on('message', async (channel, tags, message, self) => {
    //console.log(message);

    const IMAGE_URL = await getUserPfp(tags.username);
    console.log(IMAGE_URL)
    hook.setUsername(tags.username);
    hook.setAvatar(IMAGE_URL);

    // No discord pings
    if (message.includes('@everyone')) hook.send(message.replace(/@/g, "@/"));
    else if (message.includes('<@')) hook.send(message.replace(/<@/g, "<@/"));
    else hook.send(message);
});

async function getUserPfp(username) {
    try {
        const res = await axios.get(`https://api.twitch.tv/helix/users?login=${username}`, {
            headers: {
                "Client-Id": clientId,
                Authorization: "Bearer " + token,
            }
        });
        console.log(res.data.data.at(0).profile_image_url);
        return res.data.data.at(0).profile_image_url;
    }
    catch (error) {
        console.error(error);
    }
}