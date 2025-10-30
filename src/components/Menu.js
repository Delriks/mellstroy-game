export function createMenu(container) {
  container.innerHTML = `
    <div class="menu">
      <h1 class="title">🎰 MELLSTROY.GAME</h1>
      <button class="menu-btn" id="startBtn">Начать</button>
      <button class="menu-btn" id="settingsBtn">Настройки</button>
      <button class="menu-btn" id="soundBtn">Звук</button>
      <button class="menu-btn" id="rulesBtn">Правила</button>
    </div>
  `

  document.getElementById('startBtn').addEventListener('click', () => {
    alert('🚀 Игра начнётся позже!')
  })

  document.getElementById('settingsBtn').addEventListener('click', () => {
    alert('⚙️ Настройки будут добавлены.')
  })

  document.getElementById('soundBtn').addEventListener('click', () => {
    alert('🔊 Переключение звука будет позже.')
  })

  document.getElementById('rulesBtn').addEventListener('click', () => {
    alert('📜 Правила будут добавлены.')
  })
}
