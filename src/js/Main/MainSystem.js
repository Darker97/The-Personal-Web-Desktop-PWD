import { Application } from '../ObjectClasses/Application.js'

/* __________________________ */
const loop = []
/* __________________________ */

/**
 * goes through the loop and activates the running apps
 */
export function loopControll () {
  loop.forEach(function (app) {
    app.loopFunction()
  })
  setTimeout(loopControll, 5000)
}

/** adds an application to the loop
 * @param {Application} Application
 */
export function addToLoop (Application) {
  console.log('start App: ' + Application.name)
  nextPosition(Application)
  document.getElementsByTagName('desktop')[0].appendChild(addApplication(Application, Application.PositionX, Application.PositionY))
  loop.push(Application)
}

/**
 * deletes the given Application from the loop
 * @param {Application} Application
 */
export function deleteFromLoop (Application) {
  const i = loop.findIndex(Application)
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

function nextPosition (Application) {
  loop.forEach(element => {
    if (element.PositionX === Application.PositionX && element.PositionY === Application.PositionY) {
      Application.PositionX += 5
      Application.PositionY += 5
    }
  })
  return Application
}
