export class Bird {
  constructor () {
    this.speed = 20
    this.gravity = 3

    this.startheight = 120
    this.startWidth = 10

    this.x = 0
    this.y = 0

    this.height = 30
    this.width = 50
    this.img = new Image()
    this.img.onload = function () { this._canvas.drawImage(this.img, 300, 300) }
    this.img.src = 'img/Bird.png'
  }
}
