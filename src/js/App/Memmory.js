import { headline } from '../Extra/userInterface.js'
/**
 * Everything that your App needs to do first
 * Load save states, create the UI etc.
 */
export function setup (app) {
  // YOUR CODE HERE
  return UI(app)
}

let MaxPoints = 0

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
function UI (app) {
  const temp = document.createElement('div')
  temp.id = 'MemmoryGame'
  newGame(temp, app)

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

/**
 * Gets an Elemnt and Adds the Game to it
 * @param {HTMLElement} temp
 */
function newGame (temp, app) {
  const arr = createCards()

  const arrayKey = ['a', 's', 'd', 'f', 'g', 'h', 'y', 'x', 'c', 'v', 'b', 'n']
  let i = 0
  arr.forEach(element => {
    element.key = arrayKey[i]
    i++
  })

  app.UsersPoints = 0
  app.CardArray = arr
  app.CardArray.forEach(element => {
    const tempCard = document.createElement('card')
    tempCard.style.backgroundImage = "url('../js/App/img/MemmoryCards/standart.png')"
    temp.appendChild(tempCard)
    element.tempCard = tempCard

    tempCard.addEventListener('click', function () { element.TurnFunction(element, temp, app) })
  })

  addKeyboard(app, temp)
}

/**
 * Creates the Play Cards for the Game
 */
function createCards () {
  var array = []
  const card1 = { id: 1, img: '../js/App/img/MemmoryCards/Card1.png', TurnFunction: function (element, temp, app) { turnCard(element, temp, app) } }
  const card2 = { id: 2, img: '../js/App/img/MemmoryCards/Card2.png', TurnFunction: function (element, temp, app) { turnCard(element, temp, app) } }
  const card3 = { id: 3, img: '../js/App/img/MemmoryCards/Card3.png', TurnFunction: function (element, temp, app) { turnCard(element, temp, app) } }
  const card4 = { id: 4, img: '../js/App/img/MemmoryCards/Card4.png', TurnFunction: function (element, temp, app) { turnCard(element, temp, app) } }
  const card5 = { id: 5, img: '../js/App/img/MemmoryCards/Card5.png', TurnFunction: function (element, temp, app) { turnCard(element, temp, app) } }
  const card6 = { id: 6, img: '../js/App/img/MemmoryCards/Card6.png', TurnFunction: function (element, temp, app) { turnCard(element, temp, app) } }

  // We add the Cards to the Array
  array.push(card1)
  array.push(card2)
  array.push(card3)
  array.push(card4)
  array.push(card5)
  array.push(card6)

  // We push it double to have pairs
  array.push(Object.create(card1))
  array.push(Object.create(card2))
  array.push(Object.create(card3))
  array.push(Object.create(card4))
  array.push(Object.create(card5))
  array.push(Object.create(card6))

  MaxPoints = array.length
  // Number of keyboard keys

  return shuffle(array)
}

/**
 * gets an Array and shuffels it with the Fisher-Yates shuffle Algorithm
 * @param {Array[Cards]} array
 */
function shuffle (array) {
  var j
  var x
  var i

  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = array[i]
    array[i] = array[j]
    array[j] = x
  }
  return array
}

let firstCard = ''
/**
 * turns the cards
 * checks if the game is over and starts a new one
 */
function turnCard (NextCard, tempWorkingObject, app) {
  if (NextCard.tempCard.disabled === true) {
    return
  }
  if (firstCard === undefined) {
    firstCard = ''
    return
  }

  NextCard.tempCard.style.backgroundImage = 'url(' + NextCard.img + ')'
  NextCard.tempCard.disabled = true

  if (firstCard === '') {
    firstCard = NextCard
  } else {
    if (firstCard.id === NextCard.id) {
      console.log('match -> ' + firstCard.id)
      app.UsersPoints++
      firstCard = ''
    } else {
      setTimeout(function () {
        firstCard.tempCard.style.backgroundImage = "url('../js/App/img/MemmoryCards/standart.png')"
        NextCard.tempCard.style.backgroundImage = "url('../js/App/img/MemmoryCards/standart.png')"
        firstCard.tempCard.disabled = false
        NextCard.tempCard.disabled = false
        firstCard = ''
      }, 200)
    }
  }

  if (app.UsersPoints === MaxPoints / 2) {
    tempWorkingObject.innerHTML = ''
    tempWorkingObject.appendChild(headline('YOU DID IT 🥳'))
    setTimeout(function (params) {
      tempWorkingObject.innerHTML = ''
      newGame(tempWorkingObject, app)
    }, 5000)
  }
}

function addKeyboard (app, temp) {
  window.addEventListener('keydown', function (event) {
    app.CardArray.forEach(element => {
      if (element.key === event.key) {
        element.TurnFunction(element, temp, app)
      }
    })
  })
}
