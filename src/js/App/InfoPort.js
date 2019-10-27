import { PrintRunningApps } from '../Main/MainSystem.js'
import { line, label } from '../Extra/userInterface.js'
import { load } from '../Extra/dataSave.js'

/**
 * Everything that your App needs to do first
 * Load save states, create the UI etc.
 */
export function setup (app) {
  // YOUR CODE HERE
  return UI(app)
}

/**
   * used for all functions that have to be checked regulary
   * @param {Application} Application
   */
export function loop (app) {
  // YOUR CODE HERE
  app.allApplications.innerHTML = ''
  activ(app, app.allApplications)
}

/**
   * deletes the element of the App
   * @param {Application} app
   */
export function kill (app) {
  console.log(app.name + ' kill')
  const temp = app.workinkObject.parentElement
  temp.parentElement.removeChild(temp)
}

/**
   * Creates the UI of the APP
   */
function UI (app) {
  const temp = document.createElement('div')
  temp.id = 'Infopage'
  const allApplications = document.createElement('ol')
  activ(app, allApplications)
  temp.appendChild(allApplications)
  app.allApplications = allApplications
  temp.appendChild(line())
  if (load('HighscoreMemory') !== undefined) {
    temp.appendChild(label('The last Memory Player so far:'))
    temp.appendChild(label(load('HighscoreMemory')))
  }
  return temp
}

/**
   * not yet in use
   */
export function minimising () {

}

/**
   * If the App gets in Focus, this function should focus the right things
   *  */
export function focus (element) {
  // YOUR CODE HERE
}

/**
 * gets a list of all running elements and adds it to temp
 * @param {Application} app
 * @param {HTML-Element} temp
 */
function activ (app, temp) {
  const appsList = PrintRunningApps()
  appsList.forEach(element => {
    const listObject = document.createElement('li')
    listObject.textContent = element
    temp.appendChild(listObject)
  })
}
