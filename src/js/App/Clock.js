import { label, button } from '../Extra/userInterface.js'

/**
 * Everything that your App needs to do first
 * Load save states, create the UI etc.
 */
export function setup (app) {
  app.secondCounter = 0
  app.BreakChecker = true
  // YOUR CODE HERE
  return UI(app)
}

/**
   * used for all functions that have to be checked regulary
   * @param {Application} app
   */
export function loop (app) {
  if (app.BreakChecker) {
    app.secondCounter++
  }
  UpdateTimer(app)
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
  temp.appendChild(document.createElement('br'))
  temp.id = 'ClockApp'
  const timer = label('00:00')
  timer.id = 'Clock'
  temp.appendChild(timer)
  app.timer = timer

  const BreakButton = document.createElement('div')
  BreakButton.id = 'startStopButton'
  BreakButton.style.backgroundImage = 'url("../js/App/img/pause.png")'

  BreakButton.addEventListener('click', function () {
    console.log('Breaktime')
    app.BreakChecker = !app.BreakChecker

    if (app.BreakChecker) {
      BreakButton.style.backgroundImage = 'url("../js/App/img/pause.png")'
    } else {
      BreakButton.style.backgroundImage = 'url("../js/App/img/start.png")'
    }
  })

  temp.appendChild(BreakButton)
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

function UpdateTimer (app) {
  if (app.secondCounter / (60 * 60) >= 1) {
    app.timer.innerText = (((app.secondCounter / 3600) >> 0) + ':' + (app.secondCounter / 60) >> 0 + ':' + (app.secondCounter % 60)).toString() + ' Hours'
  } else if (app.secondCounter / 60 >= 1) {
    app.timer.innerText = ((app.secondCounter / 60) >> 0 + ':' + (app.secondCounter % 60)).toString() + ' Minutes'
  } else {
    app.timer.innerText = (app.secondCounter).toString() + ' seconds'
  }
}
