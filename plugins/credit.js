const { getCredit } = require("hexter-md")
const commands = [
    {
      name: "credit",
      react: "💖",
      start: async (client, m) => {
        await getCredit(client,m)
      }
    }
  ];
  
  module.exports = commands;
  