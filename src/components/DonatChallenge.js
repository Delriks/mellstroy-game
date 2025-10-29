export default function DonatChallenge(container, onComplete) {
  let score = 0
  const targetScore = 5

  container.innerHTML = `
    <h2>Donat Challenge</h2>
    <p>Кликни на блогера, который бреется налысо!</p>
    <p>Очки: <span id="score">0</span> / ${targetScore}</p>
    <div class="bloggers" id="bloggers"></div>
  `

  const bloggersContainer = document.getElementById('bloggers')

  function spawnBlogger() {
    bloggersContainer.innerHTML = ''
    for (let i = 0; i < 3; i++) {
      const btn = document.createElement('button')
      btn.textContent = `Блогер ${i + 1}`
      btn.style.margin = '10px'
      btn.style.padding = '15px 25px'
      btn.style.cursor = 'pointer'
      btn.style.borderRadius = '8px'
      btn.style.border = '2px solid #ffd700'
      btn.style.background = '#111'
      btn.style.color = 'white'
      // случайный блогер налысо
      const isBald = Math.floor(Math.random() * 3) === i
      if (isBald) btn.dataset.correct = 'true'

      btn.addEventListener('click', () => {
        if (btn.dataset.correct === 'true') score++
        document.getElementById('score').textContent = score
        if (score >= targetScore) {
          container.innerHTML = `<h2>🏆 Уровень пройден!</h2>
          <button id="next-level-btn">Следующий уровень</button>`
          document.getElementById('next-level-btn').addEventListener('click', () => onComplete(score))
        } else {
          spawnBlogger()
        }
      })

      bloggersContainer.appendChild(btn)
    }
  }

  spawnBlogger()
}
