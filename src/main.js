import { createMenu } from './components/Menu.js'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  if (!app) return console.error('❌ Элемент #app не найден!')

  // Приветственный экран
  app.innerHTML = `
    <div id="welcome-screen" class="welcome-screen">
      <h1 class="neon-text">WELCOME TO<br>MELLSTROY.GAME</h1>
    </div>
  `

  // Через 3 секунды появится меню
  setTimeout(() => {
    app.innerHTML = '<div id="game-container"></div>'
    const container = document.getElementById('game-container')
    createMenu(container)
  }, 3000)
})
