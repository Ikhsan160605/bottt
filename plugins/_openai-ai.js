let axios = require('axios');

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Example:* ${usedPrefix + command} hai`;
    conn.ASUNA = conn.ASUNA ? conn.ASUNA : {};
    if (!conn.ASUNA[m.sender]) {
        conn.ASUNA[m.sender] = {
            pesan: []
        };
        conn.ASUNA[m.sender].timeout = setTimeout(() => {
            delete conn.ASUNA[m.sender];
        }, 300000);

        m.reply(`Halo \`${m.name}\`👋, Saya siap membantu anda!`);
    } else {
        clearTimeout(conn.ASUNA[m.sender].timeout);
        conn.ASUNA[m.sender].timeout = setTimeout(() => {
            delete conn.ASUNA[m.sender];
        }, 300000);
    }

    const previousMessages = conn.ASUNA[m.sender].pesan;
  
  
  /**
 * @description Ubah prompt ini sesuai dengan keinginanmu.
 * @note Usahakan memberikan logika yang masuk akal dan mudah dipahami!
 */

    const messages = [
        { role: "system", content: "kamu adalah ASUNA, Seorang Asisten pribadi yang di buat oleh KAKOI yang siap membantu kapan pun!" },
        { role: "assistant", content: `Saya ASUNA, asisten pribadi yang siap membantu kamu kapan pun! Apa yang bisa saya bantu hari ini?` },
        ...previousMessages.map((msg, i) => ({ role: i % 2 === 0 ? 'user' : 'assistant', content: msg })),
        { role: "user", content: text }
    ];
    try {
        const chat = async function(message) {
            return new Promise(async (resolve, reject) => {
                try {
                    const params = {
                        message: message,
                        apikey: btc
                    };
                    const { data } = await axios.post('https://api.botcahx.eu.org/api/search/openai-custom', params);
                    resolve(data);
                } catch (error) {
                    reject(error);
                }
            });
        };

        let res = await chat(messages);
        if (res && res.result) {
            await m.reply(res.result);
            conn.ASUNA[m.sender].pesan = [
                ...conn.ASUNA[m.sender].pesan,
                text,
                res.result
            ];
        } else {
            throw "Kesalahan dalam mengambil data";
        }
    } catch (e) {
        throw eror
    }
};

handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['tools'];
handler.premium = false
handler.limit = true;
module.exports = handler;
