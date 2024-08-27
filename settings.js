const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "94786802371, 94752756925, 94762437272, 94703113130";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://nimeshofficial:nimeshofficial@cluster0.7rkswhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.prefa = process.env.PREFIX || ".";
global.autoread = process.env.AUTOREAD || true;
global.inboxblock = process.env.INBOXBLOCK || true;
global.ggle = process.env.GOOGLE_API || "none";
global.wter = process.env.WEATHER_API || "d10782b3d1bd4ec7a3284217240206";
global.sessionId = process.env.SESSION_ID || "HEXTER-MD";
global.malid = process.env.MAL_USERNAME || undefined;
global.malpass = process.env.MAL_PASSWORD || undefined;
global.port = process.env.PORT || 8080;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
