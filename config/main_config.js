module.exports = {
 // Main config
 // author: "Majonez.exe#3957", // ->> Banned account
 author: "Majonez.exe v2#5271",
 author_website: "https://igorkowalczyk.github.io",
 // owner_id: "440200028292907048", // ->> Banned account
 owner_id: "544164729354977282",
 description: "Majo.exe - Discord bot for Fun, Memes, Images, Giveaway, Economy, Anime and NSFW! Majo serve over 100 commands!",
 support_server: "https://discord.gg/bVNNHuQ",
 support_server_id: "666599184844980224",
 status: "https://bit.ly/majo-status",
 twitter: "@majonezexe",
 github: "igorkowalczyk",
 github_repo: "majobot",
 about_bot: "... Soon!",
 about_dev: "... Soon!",
 donation_perks: "",
 patreon: "igorkowalczyk",
 ko_fi: "igorkowalczyk",
 buymeacoffee: "rkjha",
 open_collective: "igorkowalczyk",
 scopes: "bot%20applications.commands",
 permissions: "4294967287",
 suggestions_channel: "838092194530852884",
 prefix: process.env.PREFIX,
 youtube: process.env.YOUTUBE,
 id: process.env.ID,
 advanved_logging: false,
 ratelimit: 2500, // Command ratelimit (can be customized for each command)
 max_input: 200, // Maximum command arguments length
 rickroll: false, // Secret Option
 display_status: "online", // online | idle | invisible | dnd
 show_commands_list: true,
 help_embed: {
  grid: true,
  display_news: false,
  news: "Are you looking for cheap, fast and reliable hosting? [Terohost](https://terohost.com/) is perfect for you! Plans start at $1/mo! Go to [terohost.com](https://terohost.com/) and order your dream server today!",
  news_title: "<:terohost:881846121201291284> Terohost",
  show_owner_commands: false,
 },

 // Dashboard config
 domain: process.env.DOMAIN,
 certs: false,
 localhost: false,
 secure_connection: true,
 mysql_errors: false,
 privacy_policy_page: true,
 google_analitics: process.env.ANALYTICS,
 client_secret: process.env.SECRET,
 port: process.env.PORT,
 session_secret: process.env.SESSION_SECRET,
 dashboard: process.env.DASHBOARD,
 cookies: process.env.COOKIES,
 image: "banner.jpg",
 verification: "-wuCsk4qLolXEPSUTGX7YBxywcyNNf5HS2ClzgEWxNY",
 arc_token: "oFnnmBwr",
};
