import { headline3, button } from '../Extra/userInterface.js'
import { nextPosition, deleteFromLoop } from '../Main/MainSystem.js'

/**
 * gets an Application and inserts the Application-UI
 * @param {Application} Application
 * @param {Object} WorkingHtmlObject
 * @param {int} coordinateX
 * @param {int} coordinateY
 */
export function addApplication (Application, coordinateX, coordinateY) {
  nextPosition(Application)
  // Build the plattform
  const temp = AppStandartUI(Application.name, Application.PositionX, Application.PositionY, Application)
  const content = document.createElement('div')
  content.id = 'content'

  // add the app
  const TheAppItself = Application.setupFunction(Application)
  content.appendChild(TheAppItself)

  // Adding the new Elements to the Object
  Application.workinkObject = content
  Application.APPObject = temp
  temp.appendChild(content)

  dragElement(temp, Application)

  content.onmousedown = null
  return temp
}

/**
 * Builds a standart Object for the App Window
 * @param {String} Name
 * @param {int} PositionX
 * @param {int} PositionY
 */
function AppStandartUI (Name, PositionX, PositionY, Application) {
  const tempApp = document.createElement('div')
  tempApp.id = 'Application'
  var header = document.createElement('div')
  header.id = 'header'

  var close = button('')
  close.addEventListener('click', function () {
    Application.killFunction(Application)
    deleteFromLoop(Application)
  })
  tempApp.appendChild(close)

  close.title = 'close'
  close.style.background = "url('../image/close.png')"

  header.appendChild(headline3(Name))
  tempApp.appendChild(header)

  tempApp.style.top = PositionX.toString() + 'px'
  tempApp.style.left = PositionY.toString() + 'px'
  return tempApp
}

/* ----------------------- */
/**
 * ads a function to the element so we can toss it arround
 * @param {HTMLElement} element
 */
function dragElement (element, Application) {
  // TODO: ---
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

    // Set the new focus on the selected element
    setNewFocus(element, Application)

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

let lastElement
function setNewFocus (element, Application) {
  if (lastElement !== undefined) {
    // give the clicked element focus and put it to the front
    lastElement.style.zIndex = 0
    lastElement.blur()
    Application.focus(element)

    element.style.zIndex = 1000
  }
  lastElement = element
}
