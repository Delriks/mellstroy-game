// src/components/utils/animSound.js

// Заглушка: позже замени на реальные аудиофайлы
let isSoundEnabled = true;

// Пример: можно будет управлять через кнопку "🔊 Звук"
export function toggleSound() {
  isSoundEnabled = !isSoundEnabled;
  return isSoundEnabled;
}

// В Telegram звук должен запускаться ТОЛЬКО после жеста пользователя
export function playClickSound() {
  if (!isSoundEnabled) return;
  // Позже: new Audio('/sounds/click.mp3').play().catch(e => console.warn('🔇', e));
  console.log('🔊 Click sound played');
}

export function playHoverSound() {
  if (!isSoundEnabled) return;
  // Позже: new Audio('/sounds/hover.mp3').play().catch(e => console.warn('🔇', e));
  console.log('🔈 Hover sound played');
}