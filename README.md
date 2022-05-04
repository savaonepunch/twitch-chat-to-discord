<img src="https://i.imgur.com/f2RQLoQ.png" width="auto" height="100">

TCTD is an application that shows your Twitch chat inside of a Discord channel in real-time. It works by getting twitch messages with [TMI.js](https://tmijs.com/) and then sending them to Discord with the Discord Webhook library for JS, [discord-webhook-node](https://github.com/matthew1232/discord-webhook-node). The app also automatically gets each user's profile picture with Twitch's "Helix" API via [Axios](https://axios-http.com/).


## How to use:
1. Go to https://dev.twitch.tv/ and create an application to get your token and client ID.
2. Create a webhook link on Discord by going to a channel's settings.
3. Create a `secrets.json` file and place it in the same directory as `index.js`.
4. The inside of the `secrets.json` file shouls look like this:
```json
{
    "token": "YOUR_TOKEN",
    "clientId": "YOUR_CLIENT_ID",
    "webhook": "YOUR_DISCORD_WEBHOOK"
    "channels": ["YOUR_CHANNEL(S)"]
}
```
4. Done! Run `node index.js` and while this is open your Twitch chat(s) chat will be logged on Discord.
