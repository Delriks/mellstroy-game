import './styles.css'   // ⚠️ у тебя файл называется styles.css
import { createMenu } from './components/Menu.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  if (!app) return console.error('❌ Элемент #app не найден!')

  // Приветственный экран
  app.innerHTML = `
    <div class="intro-screen">
      <h1 class="intro-title">WELCOME TO<br><span>MELLSTROY.GAME</span></h1>
    </div>
  `

  // Через 3 секунды плавно исчезает и появляется меню
  setTimeout(() => {
    const intro = document.querySelector('.intro-screen')
    if (intro) {
      intro.classList.add('fade-out')
      intro.addEventListener('animationend', () => {
        app.innerHTML = '<div id="game-container"></div>'
        const container = document.getElementById('game-container')
        createMenu(container)
      })
    }
  }, 3000)
})
