import * as UserInterface from './Extra/userInterface.js'
import * as UI from './Main/UI.js'

// TODO: Starter Loop

/* ---------------------------------- */
// Variables
const WebPage = document.getElementById('Body')

/* ---------------------------------- */
// mainStart
function mainStart() {
    
}

/* ---------------------------------- */
// functions
function login() {
  WebPage.appendChild(UserInterface.headline('Welcome'))
  WebPage.appendChild(UserInterface.headline('Please Lock in'))

  const login = UserInterface.input('User')
  const password = UserInterface.password('password')
  WebPage.appendChild(login)
  WebPage.appendChild(password)

  const button = UserInterface.button('Send')

  WebPage.appendChild('button')

  button.addEventListener('click', function {
      // TODO: Add Function
  })
}

function DesktopAndStart(params) {
    WebPage.appendChild(UI.MenüLeiste())
    WebPage.appendChild(UI.Desktop())
}
/* ---------------------------------- */
mainStart()