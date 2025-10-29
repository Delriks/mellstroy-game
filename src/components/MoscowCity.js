export default function MoscowCity(container, onComplete) {
  let score = 0
  const targetScore = 5

  container.innerHTML = `
    <h2>Moscow City Beatdown</h2>
    <p>Уклоняйся от стола! Нажимай кнопки вовремя.</p>
    <p>Очки: <span id="score">0</span> / ${targetScore}</p>
    <div class="controls">
      <button id="left-btn">⬅ Влево</button>
      <button id="right-btn">➡ Вправо</button>
    </div>
  `

  function addPoint() {
    score++
    document.getElementById('score').textContent = score
    if (score >= targetScore) {
      container.innerHTML = `<h2>🏆 Уровень пройден!</h2>
      <button id="next-level-btn">Следующий уровень</button>`
      document.getElementById('next-level-btn').addEventListener('click', () => onComplete(score))
    }
  }

  document.getElementById('left-btn').addEventListener('click', addPoint)
  document.getElementById('right-btn').addEventListener('click', addPoint)
}
