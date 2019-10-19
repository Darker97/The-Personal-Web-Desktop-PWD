import { headline3 } from '../Extra/userInterface.js'
import { nextPosition } from '../Main/MainSystem.js'

/**
 * gets an Application and inserts the Application-UI
 * @param {Application} Application
 * @param {Object} WorkingHtmlObject
 * @param {int} coordinateX
 * @param {int} coordinateY
 */
export function addApplication (Application, coordinateX, coordinateY) {
  nextPosition(Application)
  const temp = AppStandartUI(Application.name, Application.PositionX, Application.PositionY)
  const content = document.createElement('div')
  content.id = 'content'
  content.appendChild(Application.setupFunction)
  Application.workinkObject = content
  temp.appendChild(content)

  dragElement(temp)

  return temp
}

/**
 * Builds a standart Object for the App Window
 * @param {String} Name
 * @param {int} PositionX
 * @param {int} PositionY
 */
function AppStandartUI (Name, PositionX, PositionY) {
  const tempApp = document.createElement('div')
  tempApp.id = 'Application'
  var header = headline3(Name)
  tempApp.appendChild(header)

  tempApp.style.top = PositionX
  tempApp.style.left = PositionY
  return tempApp
}

/* ----------------------- */
/**
 * ads a function to the element so we can toss it arround
 * @param {HTMLElement} element
 */
function dragElement (element) {
  var pos1
  var pos2
  var pos3
  var pos4
  element.onmousedown = dragMouseDown

  function dragMouseDown (e) {
    e = e || window.event
    e.preventDefault()
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  function elementDrag (e) {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    // set the element's new position:
    element.style.top = (element.offsetTop - pos2) + 'px'
    element.style.left = (element.offsetLeft - pos1) + 'px'
  }

  function closeDragElement () {
    // stop moving when mouse button is released:
    document.onmouseup = null
    document.onmousemove = null
  }
}
