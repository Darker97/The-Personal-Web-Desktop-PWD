import { Application } from '../ObjectClasses/Application.js'
import { addApplication } from '../Main/UI-APP.js'

/* __________________________ */
const loop = []
const x = 10
const y = 10
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
  const temp = Object.create(Application)
  console.log('start App: ' + temp.name)
  nextPosition(temp)
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

export function nextPosition (Application) {
  loop.forEach(element => {
    if (element.APPObject.style.top === Application.PositionX && element.APPObject.style.left === Application.PositionY) {
      Application.PositionX += 5
      Application.PositionY += 5
    }
  })
  return Application
}
