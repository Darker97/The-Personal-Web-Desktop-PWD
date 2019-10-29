import { Bird } from './Bird.js'
import { Field } from './Gamefield.js'
import { Pipe } from './Pipe.js'

/* ------------------------------------- */
const Objectfield = new Field()
const PipeArray = [new Pipe()]
/* ------------------------------------- */
export function UI (element, app) {
  const field = document.createElement('canvas')
  element.appendChild(field)
  field.style.height = Objectfield.height
  field.style.width = Objectfield.width

  // Start drawing
  const drawingPlace = field.getContext('2d')
  drawingPlace.fillStyle = 'lightblue'
  drawingPlace.fillRect(0, 0, 300, 550)

  ButtonPressed(app)

  PipeArray[0].x = drawingPlace.width

  app.score = 0

  app.bird = new Bird()

  const img = document.createElement('image')
  img.src = '/img/Bird.png'
  app.bird.img.src = img

  app.continue = true
  draw(drawingPlace, app)
}

function draw (drawingPlace, app) {
  // what is happening?

  PipeArray.forEach(element => {
    element.x--

    if (element.x === 3) {
      app.score++
    }
  })

  // mal den Bird
  drawingPlace.fillRect(app.bird.x, app.bird.y, 10, 5)

  // draw the Objects
  PipeArray.forEach(element => {
    drawingPlace.fillStyle = 'black'
    // Untere Object
    drawingPlace.fillRect(element.x, element.y, element.breite, element.höhe)
    // obeere Object
    drawingPlace.fillRect(element.x, element.y - element.abstand, element.breite, -element.höhe)

    // Start new pipe
    if (element.x === 280) {
      PipeArray.push(new Pipe(drawingPlace.width, Math.floor(Math.random() * element.height)))
    }
  })

  if (app.bird.isDead()) {
    app.continue = false
    GameOver()
  }
  // Collision
  PipeArray.forEach(element => {
    if (app.bird.colision(element)) {
      app.continue = false
      GameOver()
    }
  })

  // Draw again
  if (app.continue === true) {
    requestAnimationFrame(draw(drawingPlace, app))
  }
}

function ButtonPressed (app) {
  window.addEventListener('keydown', function (event) {
    if (app.KeyCheck === true) {
      app.bird.PlayerPush()
    }
  })
}

function GameOver (app) {
  app.element.innerHtml = ''
}
