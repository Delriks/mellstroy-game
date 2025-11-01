// src/components/Menu.js
import { startGame } from './Game.js'

export function createMenu(container) {
  container.innerHTML = `
    <div class="menu">
      <h2 class="menu-title">MELLSTROY.GAME</h2>
      <button class="menu-btn" id="start-btn">🎮 Начать игру</button>
      <button class="menu-btn" id="continue-btn">▶ Продолжить</button>
      <button class="menu-btn" id="settings-btn">⚙ Настройки</button>
      <button class="menu-btn" id="rules-btn">📜 Правила</button>
    </div>
  `

  document.getElementById('start-btn').addEventListener('click', () => {
    const app = document.getElementById('app')
    app.innerHTML = '<div id="game-container"></div>'
    const gameContainer = document.getElementById('game-container')
    startGame(gameContainer, { newGame: true })
  })

  document.getElementById('continue-btn').addEventListener('click', () => {
    const app = document.getElementById('app')
    app.innerHTML = '<div id="game-container"></div>'
    const gameContainer = document.getElementById('game-container')
    startGame(gameContainer, { newGame: false })
  })

  // (settings / rules can be wired later)
}
