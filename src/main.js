// src/main.js
import { createMenu } from './components/Menu.js'

// Ждём, пока DOM загрузится
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('game-container')
  if (!container) {
    console.error('❌ Элемент #game-container не найден!')
    return
  }
  createMenu(container)
})
