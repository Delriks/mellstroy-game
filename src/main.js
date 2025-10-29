import Splash from './components/Splash.js'
import WatchToUnlock from './components/WatchToUnlock.js'
import Menu from './components/Menu.js'  // <-- здесь нормально

const app = document.getElementById('app')

Splash(app, () => {
  WatchToUnlock(app, () => {
    Menu(app)  // <-- открываем меню после видео
  })
})
