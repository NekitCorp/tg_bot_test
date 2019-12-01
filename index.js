const Telegraf = require("telegraf");
const SocksAgent = require("socks5-https-client/lib/Agent");
const socksAgent = new SocksAgent({
    socksHost: process.env.SOCKS_HOST,
    socksPort: process.env.SOCKS_PORT
});

const bot = new Telegraf(process.env.BOT_TOKEN, {
    telegram: { agent: socksAgent }
});

bot.start(ctx => {
    console.log("started:", ctx.from.id);
    return ctx.reply("Welcome!");
});
bot.command("help", ctx => ctx.reply("Try send a sticker!"));
bot.hears("hi", ctx => ctx.reply("Hey there!"));
bot.hears(/buy/i, ctx => ctx.reply("Buy-buy!"));
bot.on("sticker", ctx => ctx.reply("👍"));

bot.startPolling();
