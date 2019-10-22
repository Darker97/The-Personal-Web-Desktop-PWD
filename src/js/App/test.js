import { headline } from '../Extra/userInterface.js'

export function setup () {
  return UI()
}

export function loop (Application) {
  if (Application.save === undefined) {
    Application.save = 0
  }
  console.log('HI - ' + Application.save)
  Application.save++
  Application.workinkObject.innerHTML = ''
  Application.workinkObject.appendChild(headline('test ' + Application.save))
}

export function kill (app) {
  console.log(app.name + ' kill')
  const temp = app.workinkObject.parentElement
  temp.parentElement.removeChild(temp)
}

function UI () {
  const temp = document.createElement('div')
  temp.appendChild(headline('baba'))
  return temp
}

export function minimising () {

}

export function focus (app) {
}
