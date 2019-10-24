export class Bird {
  constructor () {
    this.force = -20
    this.gravity = 3

    this.startheight = 120
    this.startWidth = 10

    this.maxy = 300
    this.miny = 0

    this.x = 20
    this.y = 40

    this.height = 30
    this.width = 50
    this.img = new Image()
  }

  /**
   * Gravitation in the Simulation
   */
  gravity () {
    this.y += this.gravity
  }

  /**
   * Player Pushes the bird up
   */
  PlayerPush () {
    this.y += this.force
  }

  /**
   * checks if the Bird has hit the ground or the top and givs back a boolean
   * @returns boolean -> true if dead
   */
  isDead () {
    if (this.y > this.maxy || this.y < this.miny) {
      return true
    }
    return false
  }

  /**
   * checks if we have colided with a pipe
   * @param {Pipe} Pipe wich we are checking
   * @returns Boolean -> true if we colided
   */
  colision (Pipe) {
    if (this.x > Pipe.x && this.x < Pipe.x + Pipe.breite) {
      if (this.y > Pipe.y || this.y < Pipe.y - Pipe.abstand) {
        return true
      }
    } return false
  }
}
