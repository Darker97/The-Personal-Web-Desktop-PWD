import * as UIscript from '../Extra/userInterface.js'
import * as dataSave from '../Extra/dataSave.js'
/**
 * Everything that your App needs to do first
 * Load save states, create the UI etc.
 * @param {Application} app
 */
export function setup (app) {
  app.webSocket = new WebSocket('ws://vhost3.lnu.se:20080/socket/')
  app.webSocket.onmessage = function (event) {
    console.log(event.data)
    gotNewMessage(event.data, app)
  }
  return UI(app)
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
function UI (app) {
  const temp = document.createElement('div')
  const content = document.createElement('div')
  content.id = 'chat-Content'

  temp.appendChild(content)
  const input = UIscript.input('Chat')
  input.id = 'chat-input'

  // Add to the object for later use
  app.content = content
  app.input = input

  input.addEventListener('change', function () {
    if (input.value !== '') {
      sent(input.value, app)
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
  // app.workinkObject.getElementsByClassName('input')
  document.getElementById('chat-input').focus()
}

/* ---------------------------- */
/**
 * const for the Application
 */
const key = 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
const username = 'Darker97'

/**
 * sends a given Message to the Websocket
 * @param {String} Message
 */
function sent (Message, app) {
  const request = {}
  request.data = Message
  request.key = key
  request.type = 'message'
  request.username = username
  console.log(request)
  app.webSocket.send(JSON.stringify(request))
}

/**
 * gets a new Message from the Server and displays it
 * If it's a message from the Server itself, we create a different Object
 * @param {HTMLElement} element
 * @param {String} Message
 */
function gotNewMessage (Message, app) {
  const temp = JSON.parse(Message)

  // We don't work with the Heartbeat from the Server
  if (temp.type !== 'heartbeat') {
    // If it's a message from the Server, we create a different Object

    if (temp.username === 'The Server') {
      const MessageObject = document.createElement('p')
      MessageObject.id = 'Chat-Message-Server'
      MessageObject.innerText = temp.data

      app.content.appendChild(MessageObject)
    } else {
      save(temp)
      const MessageObject = document.createElement('p')
      MessageObject.id = 'Chat-Message'
      MessageObject.innerText = temp.username + ':   ' + temp.data

      app.content.appendChild(MessageObject)
    }
  }
}

/* ------------------------------- */
// Save ID is "Chat"

function save (params) {
}

function load (params) {
}
