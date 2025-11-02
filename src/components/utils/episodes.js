export const episodes = [
  {
    id: 1,
    text: "Ты включаешь камеру. В комнате тишина. Никто не приходит. Ты говоришь в пустоту.",
    choices: [
      {
        text: "Продолжать несмотря ни на что",
        effects: { fame: 1, money: 0, humanity: 1 },
        next: 2,
      },
      {
        text: "Выключить стрим — это не твоё",
        effects: { fame: -1, money: 0, humanity: -1 },
        next: 3,
      },
    ],
  },
  {
    id: 2,
    text: "На стрим заходит несколько человек. Кто-то смеётся, кто-то поддерживает.",
    choices: [
      {
        text: "Шутить в ответ — подыграть аудитории",
        effects: { fame: 2, money: 1, humanity: 0 },
        next: 4,
      },
      {
        text: "Сделать вид, что не замечаешь троллей",
        effects: { fame: 0, money: 0, humanity: 1 },
        next: 4,
      },
    ],
  },
  {
    id: 3,
    text: "Ты выключаешь стрим и сидишь в темноте. Внутри пусто, но мысль не отпускает — а что, если попробовать снова?",
    choices: [
      {
        text: "Попробовать ещё раз завтра",
        effects: { fame: 1, money: 0, humanity: 1 },
        next: 2,
      },
      {
        text: "Удалить всё и забыть о стримах",
        effects: { fame: -2, money: 0, humanity: -1 },
        next: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Клип с твоего стрима случайно попадает в рекомендации. Тебя узнают. Сотни людей приходят.",
    choices: [
      {
        text: "Продолжать — хайп это твой путь",
        effects: { fame: 3, money: 2, humanity: -1 },
        next: 5,
      },
      {
        text: "Остановиться и выдохнуть",
        effects: { fame: 1, money: 0, humanity: 1 },
        next: 5,
      },
    ],
  },
  {
    id: 5,
    text: "Теперь тебя знают все. Но слава несёт с собой давление. Каждый день — как шоу.",
    choices: [
      {
        text: "Держать маску, несмотря на усталость",
        effects: { fame: 3, money: 1, humanity: -2 },
        next: 6,
      },
      {
        text: "Снять маску и быть собой",
        effects: { fame: 0, money: 0, humanity: 3 },
        next: 6,
      },
    ],
  },
];
