<img src="https://i.imgur.com/f2RQLoQ.png" width="auto" height="100">

TCTD to show your Twitch chat inside of a d Discord channel in real-time. It works by getting twitch messages with [TMI.js](https://tmijs.com/) and then sending them to Discord with the Discord Webhook library for JS, [discord-webhook-node](https://github.com/matthew1232/discord-webhook-node). The app also automatically gets each user's profile picture with Twitch's "Helix" API via [Axios](https://axios-http.com/).


## How to use:
1. Go to https://dev.twitch.tv/ and create an application to get your token and client ID.
2. Create a `secrets.json` file and place in the same directory as index.js.
3. The inside of the `secrets.json` file shouls look like this:
```json
{
    "token": "YOUR_TOKEN",
    "clientId": "YOUR_CLIENT_ID",
    "webhook": "YOUR_DISCORD_WEBHOOK"
    "channels": ["YOUR_CHANNEL(S)"]
}
```
