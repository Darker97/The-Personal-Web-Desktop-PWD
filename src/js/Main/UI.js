import * as ui from '../Extra/userInterface.js'

/**
 * Builds the normal Desktop UI and adds it to the Objects
 * @param {Object} WorkingHtmlObject
 */
export function BuildUI (Object) {
  Object.appendChild(Desktop())
  Object.appendChild(MenüFooter())
}

/**
 * gets an Application and inserts the Application-UI
 * @param {Application} Application
 * @param {Object} WorkingHtmlObject
 * @param {int} coordinateX
 * @param {int} coordinateY
 */
export function addApplication (Application, Object, coordinateX, coordinateY) {
  Object.appendChild(AppStandart(Application.Name, coordinateX, coordinateY))
}

/* __________________________ */
function login() {
  WebPage.appendChild(UserInterface.headline('Welcome'))
  WebPage.appendChild(UserInterface.headline('Please Lock in'))

  const login = UserInterface.input('User')
  const password = UserInterface.password('password')
  WebPage.appendChild(login)
  WebPage.appendChild(password)

  const button = UserInterface.button('Send')

  WebPage.appendChild('button')

  button.addEventListener('click', function {
      // TODO: Add Function
  })
}
/* __________________________ */

/**
 * builds a Menü
 * @returns MenüObject
 */
function MenüFooter () {
// Todo: Menüleiste init
}

/**
 * Builds a standart Object for the App Window
 * @param {String} Name
 * @param {int} coordinateX
 * @param {int} coordinateY
 */
function AppStandart (Name, coordinateX, coordinateY) {
// Todo: Appstandart
}

/**
 * Builds a desktop Envoirment
 * @returns desktopObject
 */
function Desktop () {
  // TODO: Desktop init
}
