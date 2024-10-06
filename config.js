//ASTA
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURUbDBxY1QwaWxidmsvY0VxNHY4R1k0dUhmTmtFZXZXaFFqK25jZG1rND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2xHQkRrOGgrVEZndFRqdS9qakx6THVCK1RHZE1qbUM5Q1hwcnQ1eC9GOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SjhycSs0ODcrK0RRZXRaVWRHeTdiOU5DK1o4YU9seFE0a01VVWt2Mkc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaanF5U3l5QWtPWUFDNlVNalo1dURkbjM1T2dacmdPL3RyUGpZbUo1VFNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPMVhsczVzTEdLczRmYW91emNyY2w2a2c4bDFocXdPbkk5OE9yRnJoa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRIODdlTVQzY00xSHNrNGwwTGdaVTZYWlFTWTNubXpoWEJzZ1JBK1ZmRFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUNPM3ptWXFNc0s2N1BKdW80SmtTLzZFaWJrek1oa0tTQlpvMDBKS2RtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWVjY29FRlkxbVlFOG11NlpETVhjZWUwOGliT2lWbUlZZ1llWVVMOGVIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBBRlgySktGL290QjBRZXVqWmVOcnBLQTQySGo2VEdpelI1aEE0eGFUcFdTYnJKRGMvRUlJRHg0aW9zbDdlWFk1b21zb2VIWlJic1VlcWZrUUhpR0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIyLCJhZHZTZWNyZXRLZXkiOiJkdHA5ZHBZSkJKV0JoNmZVc3Z0YjlKT3lxem00U3NQa3NQbHpmcEJOYVY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJodG1fZHlPNlE0NjRMUDh1MUNFdk9RIiwicGhvbmVJZCI6IjBhZDE0YzJmLWFhOGMtNGE5ZS1iNjNhLTIxN2E5M2I5ZDc0YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZjZ3WnJqZGdKclZyNGdpbi9FeVlEeUlpdFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFkvTGpSelFFRndLQ2V1b3pEdVBvMW9DS0FNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY2UVk2RzFOIiwibWUiOnsiaWQiOiIyNTU3MTQ1OTUwNzg6NTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05IRGwrMENFT21QaWJnR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhPa1lwYktWNTZBTFlEcURhZ1JSZEdGNXhSTnFucDF4bTZPaGx1U3N0Q0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6InpkeTFsTnA0SzFGV0ZPWk45WGdYYzdPbDFrS3hKQTdJY1ljSktHTjlQQVJTTERjNUNIUmpVQkFQMlBIYzlMMnZlK3hMa0dQRWE5OG5jT0YvaXRJRkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkLzNoMjI0N2lZbVBlemsxZjcveXcyTm85UEVqZFBJREppbDJ5ZzVldjdYUTJHS2tjQXo4RXJwR010bnFia1NhQ3V4MzFwbCt4M1RGS1ppZzB0VDVDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTcxNDU5NTA3ODo1NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmRHBHS1d5bGVlZ0MyQTZnMm9FVVhSaGVjVVRhcDZkY1p1am9aYmtyTFFoIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MjAyNzQyfQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "null";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.imgur.com/dMwGOUP.jpeg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.imgur.com/lIo3cM2.jpeg,https://i.imgur.com/OQOH4Gn.jpeg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©ᴀꜱᴛᴀ-ᴍᴅ`",
  author: process.env.PACK_AUTHER || "Asta-Md",
  packname: process.env.PACK_NAME || "Asta",
  botname: process.env.BOT_NAME || "ᴀꜱᴛᴀ-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "Astro",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Astropeda/Asta-Md";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2348039607375";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://gnime-v2.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
