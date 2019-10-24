import * as swing from '../Extra/userInterface.js'
import * as crypto from '../Extra/crypto.js'
import * as save from '../Extra/dataSave.js'

/**
 * Everything that your App needs to do first
 * Load save states, create the UI etc.
 */
export function setup (app) {
  if (save.load('secret') !== undefined) {
    app.secret = save.load('secret')
  } else {
    save.save('secret', crypto.generateSecret('U5bk20bSe8iEL9faNIPdHkArvdeI96'))
    app.secret = save.load('secret')
  }
  return UI(app)
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
function UI (app) {
  const temp = document.createElement('div')
  temp.id = 'crypto'
  const input = swing.input('Your Text')
  const inputpass = swing.input('Password')
  inputpass.type = 'password'

  const buttonencrypt = swing.button('encrypt')
  const buttondecrypt = swing.button('decrypt')
  const output = swing.label('your final text')

  temp.appendChild(input)
  temp.appendChild(inputpass)
  temp.appendChild(buttondecrypt)
  temp.appendChild(buttonencrypt)
  temp.appendChild(document.createElement('br'))
  temp.appendChild(output)

  app.element = input

  buttondecrypt.addEventListener('click', function () {
    output.textContent = decrypt(input.value, inputpass.value)
  })
  buttonencrypt.addEventListener('click', function () {
    output.textContent = encrypt(input.value, inputpass.value)
  })
  return temp
}

function encrypt (message, Password, secret) {
  const tempString = crypto.encryption(message, Password, secret)
  return tempString
}

function decrypt (message, Password, secret) {
  const tempString = crypto.decryption(message, Password, secret)
  return tempString
}

/**
   * not yet in use
   */
export function minimising () {

}

/**
   * If the App gets in Focus, this function should focus the right things
   *  */
export function focus (element, app) {
  app.element.focus()
}
