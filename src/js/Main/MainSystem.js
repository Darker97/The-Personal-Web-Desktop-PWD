import { addApplication } from '../Main/UI-APP.js'

/* __________________________ */
const loop = []
/* __________________________ */

/**
 * goes through the loop and activates the running apps
 */
export function loopControll () {
  loop.forEach(function (app) {
    app.loopFunction(app)
  })
  setTimeout(loopControll, 5000)
}

/** adds an application to the loop
 * @param {Application} Application
 */
export function addToLoop (Application) {
  let temp = Object.create(Application)
  console.log('start App: ' + temp.name)
  temp = nextPosition(temp)
  document.getElementsByTagName('desktop')[0].appendChild(addApplication(temp, temp.PositionX, temp.PositionY))
  loop.push(temp)
  temp.PID = loop.length
}

/**
 * deletes the given Application from the loop
 * @param {Application} Application
 */
export function deleteFromLoop (Application) {
  const i = loop.indexOf(Application)
  loop.splice(i, 1)
}

/**
 * returns a String with the name of all Apps that are currently inside the loop.
 */
export function PrintRunningApps () {
  let i = ''
  loop.forEach(function (app) {
    i = i + '-' + app.name
  })
  return i
}

/**
 * RECURSIV Function
 * Will Check if the new position of the application is already taken and find a new spot for the app.
 * If we reach the Border of the field, we will start on the upper or left side, depending on the Border we have hit.
 * @param {Application} Application
 */
export function nextPosition (Application) {
  loop.forEach(element => {
    if (element.workinkObject.parentElement.style.top === Application.PositionX.toString() + 'px' && element.workinkObject.parentElement.style.left === Application.PositionY.toString() + 'px') {
      Application.PositionX += 10
      Application.PositionY += 10
    }
  })
  if (Application.PositionX + 350 > window.screen.availHeight) {
    Application.PositionX = 0
    return nextPosition(Application)
  }
  if (Application.PositionY + 250 > window.screen.availWidth) {
    Application.PositionY = 0
    Application.PositionX = 350
    return nextPosition(Application)
  }
  return Application
}
