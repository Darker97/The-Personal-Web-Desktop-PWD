import { addToLoop } from '../Main/MainSystem.js'

/**
 * gets an Application and inserts the Application-UI
 * @param {Application} Application
 * @param {Object} WorkingHtmlObject
 * @param {int} coordinateX
 * @param {int} coordinateY
 */
export function addApplication (Application, coordinateX, coordinateY) {
  addToLoop(Application)
  return AppStandartUI(Application.Name, Application.coordinateX, Application.coordinateY)
}

/**
 * Builds a standart Object for the App Window
 * @param {String} Name
 * @param {int} coordinateX
 * @param {int} coordinateY
 */
function AppStandartUI (Name, coordinateX, coordinateY) {
  // Todo: Appstandart

}