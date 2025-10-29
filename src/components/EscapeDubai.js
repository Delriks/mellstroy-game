export default function EscapeDubai(container, onComplete) {
  let stage = 0
  const targetStage = 5

  container.innerHTML = `
    <h2>Escape to Dubai</h2>
    <p>Пройди 5 этапов!</p>
    <p>Этап: <span id="stage">0</span> / ${targetStage}</p>
    <div class="controls">
      <button id="forward-btn">⬆ Вперёд</button>
      <button id="left-btn">⬅ Влево</button>
      <button id="right-btn">➡ Вправо</button>
    </div>
  `

  function nextStage() {
    stage++
    document.getElementById('stage').textContent = stage
    if (stage >= targetStage) {
      container.innerHTML = `<h2>🏆 Уровень пройден!</h2>
      <button id="next-level-btn">Следующий уровень</button>`
      document.getElementById('next-level-btn').addEventListener('click', () => onComplete(stage))
    }
  }

  document.getElementById('forward-btn').addEventListener('click', nextStage)
  document.getElementById('left-btn').addEventListener('click', nextStage)
  document.getElementById('right-btn').addEventListener('click', nextStage)
}

