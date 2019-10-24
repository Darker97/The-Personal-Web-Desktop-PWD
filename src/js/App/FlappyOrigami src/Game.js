import { Bird } from './Bird.js'
import { Field } from './Gamefield.js'
import { Pipe } from './Pipe.js'

/* ------------------------------------- */
const Objectbird = new Bird()
const Objectfield = new Field()
const ObjectPipe = new Pipe()
const PipeArray = [new Pipe()]
/* ------------------------------------- */
export function UI (element, app) {
  const field = document.createElement('canvas')
  element.appendChild(field)
  field.style.height = Objectfield.height
  field.style.width = Objectfield.width

  const drawingPlace = field.getContext('2d')
  drawingPlace.drawImage(Objectbird.img, Objectbird.startheight, Objectbird.startWidth, Objectbird.width, Objectbird.height)

  ButtonPressed(app)

  Objectbird.img.src = 'img/Bird.png'
  ObjectPipe.imgBottom.src = 'img/Pipe_bottom.png'
  ObjectPipe.imgTop.src = 'img/Pipe_top.png'

  PipeArray[0].x = drawingPlace.width
  PipeArray[0].y = 0

  app.score = 0
  draw(drawingPlace, app)
}

function draw (drawingPlace, app) {
  // what is happening?
  Objectbird.x += Objectfield.gravity

  PipeArray.forEach(element => {
    element.x--

    if (element.x === 3) {
      app.score++
    }
  })

  // draw the Objects
  PipeArray.forEach(element => {
    drawingPlace.drawImage(element.imgTop, element.x, element.y)
    drawingPlace.drawImage(element.imgBottom, element.x, element.y + element.abstand)

    if (element.x === 280) {
      PipeArray.push(new Pipe(drawingPlace.width, Math.floor(Math.random() * element.height) - element.height))
      PipeArray[PipeArray.length - 1].imgBottom.src = 'img/Pipe_bottom.png'
      PipeArray[PipeArray.length - 1].imgTop.src = 'img/Pipe_top.png'
    }
  })
  drawingPlace.drawImage(Objectbird.img, Objectbird.x, Objectbird.y)

  // Scoreboard
  drawingPlace.fillStyle = '#000'
  drawingPlace.fillText(app.score, 10, drawingPlace.height - 20)

  // Collision
  PipeArray.forEach(element => {
    if (Objectbird.x + Objectbird.width >= element.x && Objectbird.x <= element.x + element.width && (Objectbird.y <= element.y + element.height || Objectbird.y + Objectbird.height >= element.y + element.abstand)) {
      GameOver(app)
    }
  })

  // Draw again
  requestAnimationFrame(draw)
}

function ButtonPressed (app) {
  window.addEventListener('keydown', function (event) {
    if (app.KeyCheck === true) {
      if (event.code === 'Space') {
        Objectbird.x += 20
      }
    }
  })
}

function GameOver (app) {
  app.element.innerHtml = ''
}
