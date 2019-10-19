import { headline } from '../Extra/userInterface.js'

export function setup () {
  return UI()
}

let i = 0
export function loop (Application) {
  console.log('HI - ' + i)
  i++
  Application.workinkObject.appendChild(headline('test'))
}

export function kill () {

}

function UI () {
  const temp = document.createElement('div')
  temp.appendChild(headline('baba'))
  return temp
}

export function minimising () {

}
