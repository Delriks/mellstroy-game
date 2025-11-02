import { createGame } from './Game.js'

export function createMenu(container) {
  container.innerHTML = `
    <div class="menu fade-in">
      <h2 class="menu-title">MELLSTROY.GAME</h2>

      <div class="menu-buttons">
        <button id="start-btn" class="menu-btn">🎮 Начать игру</button>
        <button id="settings-btn" class="menu-btn">⚙ Настройки</button>
        <button id="sound-btn" class="menu-btn">🔊 Звук</button>
        <button id="rules-btn" class="menu-btn">📜 Правила</button>
      </div>
    </div>
  `

  // 🎮 НАЧАТЬ ИГРУ
  const startBtn = container.querySelector('#start-btn')
  startBtn.addEventListener('click', () => {
    container.classList.add('fade-out')
    setTimeout(() => {
      const app = document.getElementById('app')
      app.innerHTML = '<div id="game-container"></div>'
      const gameContainer = document.getElementById('game-container')
      createGame(gameContainer)
    }, 600)
  })

  // ⚙ НАСТРОЙКИ
  const settingsBtn = container.querySelector('#settings-btn')
  settingsBtn.addEventListener('click', () => {
    alert('🔧 Раздел настроек в разработке!')
  })

  // 🔊 ЗВУК
  const soundBtn = container.querySelector('#sound-btn')
  soundBtn.addEventListener('click', () => {
    alert('🎵 Звуковое сопровождение появится в следующих обновлениях!')
  })

  // 📜 ПРАВИЛА
  const rulesBtn = container.querySelector('#rules-btn')
  rulesBtn.addEventListener('click', () => {
    alert(`
📜 Правила игры MELLSTROY.GAME:
1️⃣ Делай выбор — и он повлияет на судьбу.
2️⃣ Каждый поступок меняет славу, человечность и успех.
3️⃣ Историй много, финал — только твой.
    `)
  })
}
