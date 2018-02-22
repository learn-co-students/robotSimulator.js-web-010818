class Robot {
  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }
  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }
	setBearing(bearing) {
    if (['north', 'south', 'east', 'west'].includes(bearing)) {
      this.bearing = bearing
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }
  place(position) {
    this.coordinates = [position.x, position.y]
    this.bearing = position.direction
  }
  turnRight() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
    }
  }
  turnLeft() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'west':
        this.bearing = 'south'
        break;
    }
  }
  advance() {
    switch(this.bearing) {
      case 'north':
        this.coordinates[1]++
        break;
      case 'east':
        this.coordinates[0]++
        break;
      case 'south':
        this.coordinates[1]--
        break;
      case 'west':
        this.coordinates[0]--
        break;
    }
  }
  translateInstructions(input) {
    for (var i = 0; i < input.length; i++) {
      this.handle(input[i])
    }
  }
  handle(command) {
    switch(command) {
      case 'R':
        this.turnRight()
        break;
      case 'L':
        this.turnLeft()
        break;
      case 'A':
        this.advance()
        break;
    }
  }
}
