import ChatRoulette from './ChatRoulette.js'
import MoscowCity from './MoscowCity.js'
import DonatChallenge from './DonatChallenge.js'
import EscapeDubai from './EscapeDubai.js'
import EverestChallenge from './EverestChallenge.js'
import CasinoBoss from './CasinoBoss.js'
 
export default function GameManager(container) {
  const levels = [
  { name: 'Чат-рулетка', func: ChatRoulette },
  { name: 'Moscow City Beatdown', func: MoscowCity },
  { name: 'Donat Challenge', func: DonatChallenge },
  { name: 'Escape to Dubai', func: EscapeDubai },
  { name: 'Everest Challenge', func: EverestChallenge },
  { name: 'Финальный босс MELLSTROY', func: CasinoBoss },
]

  let currentLevel = 0

  function startNextLevel() {
    if (currentLevel >= levels.length) {
      container.innerHTML = `<h2>🏆 Все уровни пройдены!</h2>`
      return
    }

    const level = levels[currentLevel]
    level.func(container, (score) => {
      currentLevel++
      container.innerHTML = `<h2>🎯 Уровень "${level.name}" завершён! Очки: ${score}</h2>
      <button id="next-btn">Следующий уровень</button>`
      document.getElementById('next-btn').addEventListener('click', startNextLevel)
    })
  }

  startNextLevel()
}
