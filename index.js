const axios = require("axios")

const getCommand = async (client, m,command, prefix, text, args) => {
    try {
        const response = await axios.get(`https://far-cuckoo-nimeshofficial15-853fcda0.koyeb.app/derana-news`);
            
        const caption = `Title: ${response.data.result.title}
        
        Date: ${response.data.result.date}
        
        Description: ${response.data.result.description}
        
        *ʜᴇxᴛᴇʀ-ᴍᴅ ʙᴇᴛᴀ ᴠᴇʀsɪᴏɴ*
        *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇᴠᴇʟᴏᴄᴏʀᴇ ᴘᴠᴛ ʟᴛᴅ*`;
        
        await client.sendMessage(m.from, { image: { url: response.data.result.image }, caption: caption }, { quoted: m });
    } catch (error) {
      console.error('Error fetching commands:', error);
      throw error; // Optionally rethrow or handle it differently
    }
  };
  
  module.exports = { getCommand };