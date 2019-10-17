import { headline } from '../Extra/userInterface.js'

export function setup () {
  return UI()
}

export function loop () {

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
