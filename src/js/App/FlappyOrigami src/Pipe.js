export class Pipe {
  constructor (x, y) {
    this.height = x
    this.width = y

    this.abstand = 20

    this.imgTop = () => {
      var image = new Image()
      image.src = 'img/Pipe_top.png'
      return image
    }
    this.imgBottom = () => {
      var image = new Image()
      image.src = 'img/Pipe_bottom.png'
      return image
    }
  }
}
