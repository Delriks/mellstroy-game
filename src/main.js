import './styles.css'
import { createMenu } from './components/Menu.js'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('game-container')
  createMenu(container)
})
