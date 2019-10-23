import * as MainSystem from '../Main/MainSystem.js'
import * as UserInterface from '../Extra/userInterface.js'
import { mainStart } from '../app.js'
import { seassionSafe } from '../Extra/dataSave.js'

/**
 * Builds the normal Desktop UI and adds it to the Objects
 * @param {Object} WorkingHtmlObject
 */
export function BuildUI (Object, apps) {
  document.body.appendChild(Desktop())
  document.body.appendChild(MenüFooter(apps))
}

/* __________________________ */
export function login (WebPage) {
  const LoginPage = document.createElement('main')
  LoginPage.id = 'LoginPage'

  //LoginPage.style.width = (window.screen.availWidth.toString() - 30) + 'px'
  //LoginPage.style.height = (window.screen.availHeight - 200).toString() + 'px'

  LoginPage.appendChild(UserInterface.headline('Welcome'))
  LoginPage.appendChild(UserInterface.headline('Please Log in:'))

  const login = UserInterface.input('User')
  LoginPage.appendChild(login)

  const button = UserInterface.button('Login')

  LoginPage.appendChild(button)

  document.body.appendChild(LoginPage)

  login.addEventListener('change', function () {
    seassionSafe('Username', login.value)
    document.body.innerHTML = ''
    mainStart()
  })

  button.addEventListener('click', function () {
    seassionSafe('Username', login.value)
    document.body.innerHTML = ''
    mainStart()
  })
}
/* __________________________ */

/**
 * builds a Menü
 * @returns MenüObject
 */
function MenüFooter (apps) {
  const tempLeiste = document.createElement('menuleiste')

  apps.forEach(element => {
    // Build your app

    const tempApp = document.createElement('button')
    tempApp.title = element.name
    // console.log(element.Icon)
    tempApp.style.background = "url('" + '../js/App/icons/' + element.Icon + "')"
    tempApp.style.backgroundSize = 'cover'

    tempApp.addEventListener('click', function () {
      MainSystem.addToLoop(element)
    })
    tempLeiste.appendChild(tempApp)
  })
  return tempLeiste
}

/**
 * Builds a desktop Envoirment
 * @returns desktopObject
 */
function Desktop () {
  return document.createElement('desktop')
}
