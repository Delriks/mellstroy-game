import Splash from './components/Splash.js'
import WatchToUnlock from './components/WatchToUnlock.js'
import Menu from './components/Menu.js'

const app = document.getElementById('app')

Splash(app, () => {
  WatchToUnlock(app, () => {
    Menu(app) // теперь кнопка Play точно работает
  })
})
