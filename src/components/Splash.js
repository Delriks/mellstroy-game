export default function Splash(container, onNext) {
  container.innerHTML = `
    <img src="/logo.png" alt="MELLSTROY Logo" class="logo"/>
    <h1>MELLSTROY.GAME</h1>
    <p>🕹️ Добро пожаловать в мир MELLSTROY.GAME </p>
  `

  setTimeout(onNext, 2500)
}
