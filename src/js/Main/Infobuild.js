import { Application } from '../ObjectClasses/Application.js'
import * as test from '../App/test.js'
import * as Memmory from '../App/Memmory.js'
import * as Chat from '../App/Chat.js'

export function appInit () {
  const application = []
  application.push(new Application('test', 1, 0, 'Eine kleine test App', 'binaryFile.png', 0, 0, test.loop(), test.setup()))
  application.push(new Application('Memmory', 2, 0, 'memmory Game', 'Memmory.png', 0, 0, Memmory.loop(), Memmory.setup()))
  application.push(new Application('Chat', 3, 0, 'ChatApp', 'chat.png', 0, 0, Chat.loop(), Chat.setup()))
  return application
}
