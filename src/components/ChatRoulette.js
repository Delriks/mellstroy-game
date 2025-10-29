export default function ChatRoulette(container, onComplete) {
  let score = 0
  let questionIndex = 0

  const questions = [
    {
      text: "Девушка пишет: 'Привет! 😃'",
      options: ["Привет, хочешь лайкнуть фото?", "Привет! Как дела?"],
      correct: 1
    },
    {
      text: "Девушка пишет: 'Что делаешь вечером?'",
      options: ["Хочешь раздеться за лайки?", "Пойдём гулять?"],
      correct: 1
    },
    {
      text: "Девушка пишет: 'Мне скучно...'",
      options: ["Давай сыграем в игру на лайки", "Пошли в кино?"],
      correct: 1
    }
  ]

  function showQuestion() {
    if (questionIndex >= questions.length) {
      container.innerHTML = `<h2>🎉 Уровень пройден! Очки: ${score}</h2>
      <button id="next-level-btn">Следующий уровень</button>`
      document.getElementById('next-level-btn').addEventListener('click', () => onComplete(score))
      return
    }

    const q = questions[questionIndex]
    container.innerHTML = `
      <h2>Чат-рулетка</h2>
      <div class="chat-box">
        <p>${q.text}</p>
      </div>
      <div class="options">
        <button id="opt0">${q.options[0]}</button>
        <button id="opt1">${q.options[1]}</button>
      </div>
      <p>Очки: ${score}</p>
    `

    document.getElementById('opt0').addEventListener('click', () => checkAnswer(0))
    document.getElementById('opt1').addEventListener('click', () => checkAnswer(1))
  }

  function checkAnswer(selected) {
    const correct = questions[questionIndex].correct
    if (selected === correct) score += 10
    questionIndex++
    showQuestion()
  }

  showQuestion()
}
