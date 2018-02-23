class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(a, b) {
    this.coordinates = [a,b]
    return this.coordinates
  }

  setBearing(direction) {
    let validDirections = ['north', 'south', 'east', 'west']
    if (!validDirections.includes(direction.toLowerCase())) {
      throw 'Invalid Robot Bearing'
    } else {
      this.bearing = direction.toLowerCase()
      return this.bearing
    }
  }

  place(placement) {
    this.setCoordinates(placement.x, placement.y)
    this.setBearing(placement.direction)
  }

  turnRight() {
    let directions = ['north', 'east', 'south', 'west']
    if (this.bearing === 'west') {
      this.bearing = 'north'
    } else {
      this.bearing = directions[directions.indexOf(this.bearing) + 1]
    }
  }

  turnLeft() {
    let directions = ['north', 'east', 'south', 'west']
    if (this.bearing === 'north') {
      this.bearing = 'west'
    } else {
      this.bearing = directions[directions.indexOf(this.bearing) - 1]
    }
  }

  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates[1] += 1;
        break;
      case "south":
        this.coordinates[1] -= 1;
        break;
      case "east":
        this.coordinates[0] += 1;
        break;
      case "west":
        this.coordinates[0] -= 1;
        break;
      default:
        break;
    }
  }

  translateInstructions(instructions) {
    instructions.split("").forEach(instruction => {
      switch (instruction) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "A":
          this.advance();
          break;
        default:
          break;
      }
    });
  }
}
