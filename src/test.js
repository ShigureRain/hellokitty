import string from './css.js'  //把内容导入


const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)  //写入文本
    player.ui.demo2.innerHTML = string.substr(0, player.n)  //写入html
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {//如果key是player自身属性
        const value = player.events[key] // pause / play / slow
        document.querySelector(key).onclick = player[value]
      }
    }

  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)  //大于字符串长度时停止继续
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight  //滚动条拉到滚动最大的地方，即自动往下拉滚动条
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)  //重新设置id
  },
  pause: () => {
    window.clearInterval(player.id)
  },  //清除id，砸掉闹钟用来暂停
  slow: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 50
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()






