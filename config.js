global.owner = ['6285156052392']  
global.mods = ['6285156052392'] 
global.prems = ['6285156052392']
global.nameowner = 'Kakoi'
global.numberowner = '6285156052392' 
global.mail = 'Allancechain@gmail.com' 
global.gc = 'https://chat.whatsapp.com/'
global.instagram = 'https://instagram.com/chrstopher_16'
global.wm = '© Kakoi'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '5' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = '67051f76ca706220da3b' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'ihEVaI7d'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org',
  widipe: 'https://widipe.com'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
