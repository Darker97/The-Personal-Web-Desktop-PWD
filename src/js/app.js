import { BuildUI } from './Main/UI.js'
import { loopControll } from './Main/MainSystem.js'

/* ---------------------------------- */
// Variables
const WebPage = document.getElementById('Body')

/* ---------------------------------- */
/**
 * starts the functions and builds the UI
 */
function mainStart () {
  loopControll()
  BuildUI(WebPage)
}

/* ---------------------------------- */
mainStart()
