export class Pipe {
  constructor (x, y) {
    this.breite = 20
    this.höhe = 30
    this.abstand = 20

    this.x = x
    this.y = y

    this.imgTop = new Image()
    this.imgBottom = new Image()
  }

  movement () {
    this.x--
  }
}
