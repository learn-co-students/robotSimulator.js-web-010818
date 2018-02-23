class Robot {

  constructor() {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(direction) {
    if (this.constructor.validDirections.includes(direction)) {
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  place(placement) {
    this.setCoordinates(placement.x, placement.y)
    this.setBearing(placement.direction)
  }

  turnRight() {
    switch (this.bearing) {
      case "south":
        this.bearing = 'west'
        break;
      case "east":
        this.bearing = 'south'
        break;
      case 'north':
        this.bearing = 'east'
        break;
      case 'west':
        this.bearing = 'north'
        break;
      default:
        this.bearing = 'north'
    }

    // if (this.bearing === 'south') {
    //   this.bearing = 'west'
    // } else if (this.bearing === 'east') {
    //   this.bearing = 'south'
    // } else if (this.bearing === 'north') {
    //   this.bearing = 'east'
    // } else if (this.bearing === 'west') {
    //   this.bearing = 'north'
    // }
  }

  turnLeft() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      default:
        this.bearing = 'north'

    }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break;
      case 'east':
        this.coordinates[0] += 1
        break;
      case 'south':
        this.coordinates[1] -= 1
        break;
      case 'west':
        this.coordinates[0] -= 1
        break;
    }
  }

  translateInstructions(instructions) {
    instructions.split("").forEach((character) => {
      switch (character) {
        case 'R':
          this.turnRight()
          break;
        case 'L':
          this.turnLeft()
          break;
        case 'A':
          this.advance()
          break;
        default:
          break;
      }

    })
  }

}

Robot.validDirections = ["north", "south", "east", "west"]