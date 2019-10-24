import { Application } from '../ObjectClasses/Application.js'
import * as test from '../App/test.js'
import * as Memmory from '../App/Memmory.js'
import * as Chat from '../App/Chat.js'
import * as never from '../App/never.js'

export function appInit () {
  const application = []
  application.push(new Application('test', 1, 0, 'Eine kleine test App', 'binaryFile.png', 0, 0, function (app) { test.loop(app) }, function (app) { return test.setup(app) }, function (app) { test.kill(app) }, function (element, app) { test.focus(element, app) }, function (app) { test.focus(app) }))
  application.push(new Application('Memmory', 2, 0, 'memmory Game', 'Memmory.png', 0, 0, function (app) { Memmory.loop() }, function (app) { return Memmory.setup(app) }, function (app) { Memmory.kill(app) }, function (element, app) { Memmory.focus(element, app) }, function (app) { Memmory.focus(app) }))
  application.push(new Application('Chat', 3, 0, 'ChatApp', 'chat.png', 0, 0, function (app) { Chat.loop() }, function (app) { return Chat.setup(app) }, function (app) { Chat.kill(app) }, function (element, app) { Chat.focus(element, app) }, function (app) { Chat.focus(app) }))
  application.push(new Application('Never', 4, 0, 'He will never...', 'never.png', 0, 0, function (app) { never.loop(app) }, function (app) { return never.setup(app) }, function (app) { never.kill(app) }, function (element, app) { never.focus(element, app) }, function (app) { never.focus(app) }))
  return application
}
