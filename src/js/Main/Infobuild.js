import { Application } from '../ObjectClasses/Application.js'
import * as test from '../App/test.js'
import * as Memmory from '../App/Memmory.js'
import * as Chat from '../App/Chat.js'
import * as never from '../App/never.js'

export function appInit () {
  const application = []
  application.push(new Application('test', 1, 0, 'Eine kleine test App', 'binaryFile.png', 0, 0, function (app) { test.loop(app) }, function () { return test.setup() }, function (app) { test.kill(app) }, function (app) { test.focus(Application) }))
  application.push(new Application('Memmory', 2, 0, 'memmory Game', 'Memmory.png', 0, 0, function (app) { Memmory.loop() }, function () { return Memmory.setup() }, function (app) { Memmory.kill(app) }, function (app) { Memmory.focus(Application) }))
  application.push(new Application('Chat', 3, 0, 'ChatApp', 'chat.png', 0, 0, function (app) { Chat.loop() }, function () { return Chat.setup() }, function (app) { Chat.kill(app) }, function (app) { Chat.focus(Application) }))
  application.push(new Application('Never', 4, 0, 'He will never...', 'never.png', 0, 0, function (app) { never.loop(app) }, function () { return never.setup() }, function (app) { never.kill(app) }, function (app) { never.focus(Application) }))
  return application
}
