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
   */
  constructor (name, ID, PID, Info, ICON, PositionX, PositionY, loopFunction) {
    this.name = name
    this.ID = ID
    this.PID = PID
    this.Info = Info
    this.Icon = ICON
    this.PositionX = PositionX
    this.PositionY = PositionY
    this.function = loopFunction
  }
}
