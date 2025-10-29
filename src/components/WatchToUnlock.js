export default function WatchToUnlock(container, onUnlock) {
  container.innerHTML = `
    <h1>🎬 Посмотреть видео</h1>
    <p>Чтобы разблокировать игру, посмотрите короткий ролик</p>
    <button id="watch-btn">▶ Смотреть</button>
  `

  const btn = document.getElementById('watch-btn')
  btn.addEventListener('click', () => {
    btn.disabled = true
    btn.textContent = '▶ Видео идет...'

    // Симуляция просмотра видео
    setTimeout(() => {
      btn.textContent = '✅ Видео просмотрено'
      setTimeout(onUnlock, 1500)
    }, 4000)
  })
}
