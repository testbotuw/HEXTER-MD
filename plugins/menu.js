require("../settings")
const { getMenu, getAlive } = require("hexter-md");
const commands = [
  {
  name: "menu",
  alias: ["h", "panel"],
  desc: "List all command",
  category: "General",
  react: "✅",
  start: async (client, m, { commands, args, prefix, text, toUpper }) => {
    await getMenu(client, m, { commands, args, prefix, text, toUpper })
  }
},

//============================================================

{
  name: "alive",
  react: "🍁",
  category: "General",
  start: async(client, m, { pushName }) => {
    await getAlive(client, m, { pushName })
  }
}

]

module.exports = commands;
