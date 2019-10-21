import * as UIscript from '../Extra/userInterface.js'
import * as dataSave from '../Extra/dataSave.js'
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
 * Not uses in this case
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
  const content = document.createElement('div')
  content.id = 'chat-Content'
  temp.appendChild(content)
  const input = UIscript.input('Chat')
  input.id = 'chat-input'
  input.addEventListener('change', function () {
    if (input.value !== '') {
      sent(input.value)
    }
    input.value = ''
  })
  temp.appendChild(input)
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
export function focus (app) {
  // YOUR CODE HERE
  document.getElementById('chat-input').focus()
}

/* ---------------------------- */
/**
 * const for the Application
 */
const key = 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
const username = ''

/**
 * sends a given Message to the Websocket
 * @param {String} Message
 */
function sent (Message) {
  const request = {}
  request.data = Message
  request.key = key
  request.type = 'message'
  request.username = username
  console.log(request)

}

/**
 * gets a new Message from the Server and displays it
 * @param {HTMLElement} element
 * @param {String} Message
 */
function gotNewMessage (Message) {
  save(Message)
  const MessageObject = document.createElement('p')
  MessageObject.id = 'Chat-Message'
  MessageObject.innerText = Message
  document.getElementById('chat-Content').appendChild(MessageObject)
}

/* ------------------------------- */
// Save ID is "Chat"

function save (params) {
}

function load (params) {
}
