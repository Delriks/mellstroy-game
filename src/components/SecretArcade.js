export default function SecretArcade(container) {
  container.innerHTML = `
    <h2>🎮 Секретная аркада!</h2>
    <p>Собери монеты и избегай препятствий.</p>
    <p>Нажимай стрелки на клавиатуре для управления.</p>
    <canvas id="arcade-canvas" width="600" height="400" style="border:2px solid #000;"></canvas>
  `

  const canvas = document.getElementById('arcade-canvas')
  const ctx = canvas.getContext('2d')
  let x = 50, y = 350, vy = 0, gravity = 1, coinsCollected = 0

  document.addEventListener('keydown', e => {
    if (e.code === 'ArrowUp' && y >= 350) vy = -15 // прыжок
  })

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // персонаж
    vy += gravity
    y += vy
    if (y > 350) y = 350
    ctx.fillStyle = 'red'
    ctx.fillRect(x, y - 50, 30, 50)

    // монета
    ctx.fillStyle = 'yellow'
    ctx.fillRect(500, 350 - 20, 20, 20)

    // проверка столкновения
    if (x + 30 > 500 && x < 520 && y + 50 > 350 - 20 && y < 350) {
      coinsCollected++
      alert(`Вы собрали ${coinsCollected} монет! Приз готов!`)
      return
    }

    requestAnimationFrame(gameLoop)
  }

  gameLoop()
}
