const mineflayer = require('mineflayer');

console.log('Starting...')

function createBot () {
    const bot = mineflayer.createBot({
    host: "IntellectualSMP1.aternos.me",
    port: "38222",
    username: "SMP_BOT",
    version: false
    })
    bot.on('login', function() {
      bot.chat('Intellectual SMP BOT > SMP_BOT has joined the server! ✔️')
      bot.chat('Intellectual SMP BOT > Thank you daddy schizo! ✔️')
    })
    bot.on('chat', (username, message) => {
      if (username === bot.username) return
      switch (message) {
        case ';start':
          bot.chat('Intellectual SMP BOT > Bot started!')
          bot.setControlState('forward', true)
          bot.setControlState('jump', true)
          bot.setControlState('sprint', true)
          break
          case ';stop':
            bot.chat('Intellectual SMP BOT > Bot stoped!')
            bot.clearControlStates()
            break
          }
        })
        bot.on('spawn', function() {
          bot.chat('Intellectual SMP BOT > Spawned')
        })
        bot.on('death', function() {
          bot.chat('Intellectual SMP BOT > Respawned')
        })
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
        bot.on('error', err => console.log(err))
        bot.on('end', createBot)
}

createBot()
