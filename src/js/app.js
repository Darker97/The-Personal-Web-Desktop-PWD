import { BuildUI } from './Main/UI.js'
import { loopControll } from './Main/MainSystem.js'
import { appInit } from './Main/Infobuild.js'

/* ---------------------------------- */
// Variables
const WebPage = document.getElementsByTagName('body')
const Apps = appInit()
/* ---------------------------------- */
/**
 * starts the functions and builds the UI
 */
function mainStart () {
  loopControll()
  BuildUI(WebPage, Apps)
}

/* ---------------------------------- */
console.log('Hello World!')
mainStart()
