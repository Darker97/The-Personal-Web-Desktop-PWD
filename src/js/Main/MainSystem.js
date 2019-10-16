import { Application } from '../ObjectClasses/Application.js'

/* __________________________ */
const loop = []
/* __________________________ */

/**
 * goes through the loop and activates the running apps
 */
export function loopControll () {
  loop.forEach(function (app) {
    app.loopFunction
  })
  setTimeout(loopControll, 5000)
}

/** adds an application to the loop
 * @param {Application} Application
 */
export function addToLoop (Application) {
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
    i = i + app.name
  })
}
