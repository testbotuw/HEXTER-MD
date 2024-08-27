require("../settings");
const { getSong, getYtmp3, getYtDoc } = require("hexter-md");

const commands = [
  {
    name: "song",
    desc: "Plays the song...",
    category: "Media",
    react: "🎧",
    start: async (client, m, { command, prefix, text, args }) => {
      await getSong(client, m, { command, prefix, text, args });
    },
  },

  //============================================================

  {
    name: "ytdoc",
    category: "Media",
    react: "🎧",
    start: async (client, m, { command, prefix, text, args }) => {
        await getYtDoc(client, m, { command, prefix, text, args })
  }},

  //============================================================

  {
    name: "ytmp3",
    category: "Media",
    react: "🎧",
    start: async (client, m, { command, prefix, text, args }) => {
      await getYtmp3(client, m, { command, prefix, text, args })
  }},
];
module.exports = commands;
