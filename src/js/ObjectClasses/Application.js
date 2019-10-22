export class Application {
  /**
   * Constructor for the Application Object
   * @param {String} name
   * @param {int} ID
   * @param {int} PID
   * @param {String} Info
   * @param {Url} ICON
   * @param {int} PositionX
   * @param {int} PositionY
   * @param {function} loopFunction
   * @param {function} setupFunction
   * @param {Element} workinkObject
   * @param {function} killFunction
   */
  constructor (name, ID, PID, Info, ICON, PositionX, PositionY, loopFunction, setupFunction, killFunction, focus) {
    this.name = name
    this.ID = ID
    this.PID = PID
    this.Info = Info
    this.Icon = ICON
    this.PositionX = PositionX
    this.PositionY = PositionY
    this.loopFunction = loopFunction
    this.setupFunction = setupFunction
    this.workinkObject = null
    this.killFunction = killFunction
    this.focus = focus
  }

  /**
 * changes the Koordiantes of the Application
 * @param {int} x
 * @param {int} y
 */
  changeKoordinates (x, y) {
    this.PositionX = x
    this.PositionY = y
  }
}
