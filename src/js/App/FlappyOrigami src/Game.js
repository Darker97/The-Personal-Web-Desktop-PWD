import { Bird } from './Bird.js'
import { Field } from './Gamefield.js'


/* ------------------------------------- */
let Objectbird = new Bird()
let Objectfield = new Field()
/* ------------------------------------- */
export function UI (element) {
  const field = document.createElement('canvas')
  element.appendChild(field)

  let drawingPlace = field.getContext('2d')
  drawingPlace.drawImage(Objectbird.img, Objectbird.startheight, Objectbird.startWidth, Objectbird.width, Objectbird.height)
}