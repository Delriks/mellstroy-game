import { episodes } from './utils/episodes.js'
import { endings } from './utils/endings.js'
import { playerState, resetPlayer } from './utils/playerState.js'

export function createGame(container) {
  let currentEpisode = 0

  function renderEpisode(id) {
    const episode = episodes.find(ep => ep.id === id)

    if (!episode) {
      renderEnding()
      return
    }

    container.innerHTML = `
      <div class="game-screen fade-in">
        <div class="player-stats">
          🔥 Слава: ${playerState.fame} | 💰 Успех: ${playerState.money} | ❤️ Душа: ${playerState.humanity}
        </div>
        <div class="episode">
          <h2 class="episode-title">Эпизод ${episode.id}</h2>
          <p class="episode-text">${episode.text}</p>
        </div>
        <div class="choices">
          ${episode.choices.map((choice, index) => `
            <button class="choice-btn" data-index="${index}">
              ${choice.text}
            </button>
          `).join('')}
        </div>
      </div>
    `

    const buttons = container.querySelectorAll('.choice-btn')
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index)
        const choice = episode.choices[index]

        // Обновляем параметры игрока
        playerState.fame += choice.effects.fame || 0
        playerState.money += choice.effects.money || 0
        playerState.humanity += choice.effects.humanity || 0

        if (choice.next === 'END') {
          renderEnding()
        } else {
          renderEpisode(choice.next)
        }
      })
    })
  }

  function renderEnding() {
    const ending = endings.find(end => {
      return (
        playerState.fame >= end.minFame &&
        playerState.money >= end.minMoney &&
        playerState.humanity >= end.minHumanity
      )
    }) || endings[endings.length - 1]

    container.innerHTML = `
      <div class="ending-screen fade-in">
        <h2 class="ending-title">${ending.title}</h2>
        <p class="ending-text">${ending.text}</p>
        <button class="restart-btn">🔁 Начать заново</button>
      </div>
    `

    container.querySelector('.restart-btn').addEventListener('click', () => {
      resetPlayer()
      renderEpisode(1)
    })
  }

  // Начинаем с первого эпизода
  renderEpisode(1)
}
