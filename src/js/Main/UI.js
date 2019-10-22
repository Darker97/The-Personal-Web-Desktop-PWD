import * as MainSystem from '../Main/MainSystem.js'

/**
 * Builds the normal Desktop UI and adds it to the Objects
 * @param {Object} WorkingHtmlObject
 */
export function BuildUI (Object, apps) {
  document.body.appendChild(Desktop())
  document.body.appendChild(MenüFooter(apps))
}

/* __________________________ */
export function login (WebPage, UserInterface) {
  WebPage.appendChild(UserInterface.headline('Welcome'))
  WebPage.appendChild(UserInterface.headline('Please Lock in'))

  const login = UserInterface.input('User')
  const password = UserInterface.password('password')
  WebPage.appendChild(login)
  WebPage.appendChild(password)

  const button = UserInterface.button('Send')

  WebPage.appendChild('button')

  button.addEventListener('click', function () {
    // TODO: Add Function
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
