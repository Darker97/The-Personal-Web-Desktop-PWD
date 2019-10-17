import { headline3 } from '../Extra/userInterface.js'

/**
 * gets an Application and inserts the Application-UI
 * @param {Application} Application
 * @param {Object} WorkingHtmlObject
 * @param {int} coordinateX
 * @param {int} coordinateY
 */
export function addApplication (Application, coordinateX, coordinateY) {
  const temp = AppStandartUI(Application.name, Application.coordinateX, Application.coordinateY)
  const content = document.createElement('div')
  content.id = 'content'
  content.appendChild(Application.setupFunction)
  temp.appendChild(content)
  return temp
}

/**
 * Builds a standart Object for the App Window
 * @param {String} Name
 * @param {int} coordinateX
 * @param {int} coordinateY
 */
function AppStandartUI (Name, coordinateX, coordinateY) {
  const tempApp = document.createElement('div')
  tempApp.id = 'Application'
  tempApp.appendChild(headline3(Name))
  tempApp.style.position = coordinateX + ' ' + coordinateY
  return tempApp
}
