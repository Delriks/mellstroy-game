// src/components/Menu.js
export function createMenu(container) {
  container.innerHTML = `
    <div class="menu">
      <h1 class="game-title">MELLSTROY.GAME</h1>
      <div class="menu-buttons">
        <button id="start-btn">🎮 Начать игру</button>
        <button id="settings-btn">⚙️ Настройки</button>
        <button id="rules-btn">📜 Правила</button>
        <button id="sound-btn">🔊 Звук: Вкл</button>
      </div>
    </div>
  `

  // Можно добавить фон из public/bg.jpg
  document.body.style.background = 'url("/bg.jpg") center/cover no-repeat fixed'

  // Простейшие клики
  document.getElementById('start-btn').addEventListener('click', () => {
    alert('🚀 Начинаем игру!')
  })

  document.getElementById('settings-btn').addEventListener('click', () => {
    alert('⚙️ Здесь будут настройки')
  })

  document.getElementById('rules-btn').addEventListener('click', () => {
    alert('📜 Здесь будут правила игры')
  })

  document.getElementById('sound-btn').addEventListener('click', (e) => {
    const btn = e.target
    if (btn.textContent.includes('Вкл')) {
      btn.textContent = '🔇 Звук: Выкл'
    } else {
      btn.textContent = '🔊 Звук: Вкл'
    }
  })
}
