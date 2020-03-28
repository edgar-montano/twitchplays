const TwitchBot = require("twitch-bot");
const config = require("./config.json");
const client = new TwitchBot(config);

client.on("join", channel => {
  console.log(`Joined channel: ${channel}`);
});

client.on("error", err => {
  console.log(err);
});

client.on("message", chatter => {
  if (chatter.message) {
    console.log(`${chatter.message}`);
  }
});
