export default function Menu(container) {
  container.innerHTML = `
    <h1>🎮 Главное меню</h1>
    <div class="menu-buttons">
      <button id="play-btn">▶ Play</button>
      <button id="casino-btn">🎰 Казино</button>
      <button id="clicker-btn">💰 Кликер</button>
      <button id="shop-btn">🛒 Магазин</button>
      <button id="settings-btn">⚙ Настройки</button>
    </div>
  `

  // Обработчики кнопок
  document.getElementById('play-btn').addEventListener('click', () => {
    container.innerHTML = '<h2>🚀 Уровни скоро будут здесь!</h2>'
  })

  document.getElementById('casino-btn').addEventListener('click', () => {
    container.innerHTML = '<h2>🎰 Добро пожаловать в мини-казино!</h2>'
  })

  document.getElementById('clicker-btn').addEventListener('click', () => {
    container.innerHTML = '<h2>💰 Здесь будет кликер монет!</h2>'
  })

  document.getElementById('shop-btn').addEventListener('click', () => {
    container.innerHTML = '<h2>🛒 Магазин будущих покупок</h2>'
  })

  document.getElementById('settings-btn').addEventListener('click', () => {
    container.innerHTML = '<h2>⚙ Настройки игры</h2>'
  })
}
