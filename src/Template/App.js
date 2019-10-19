/**
 * Everything that your App needs to do first
 * Load save states, create the UI etc.
 */
export function setup () {
  // YOUR CODE HERE
  return UI()
}

/**
 * used for all functions that have to be checked regulary
 * @param {Application} Application
 */
export function loop (Application) {
  // YOUR CODE HERE
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
function UI () {
  const temp = document.createElement('div')
  // YOUR CODE HERE
  return temp
}

/**
 * not yet in use
 */
export function minimising () {

}
