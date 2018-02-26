class Robot {
  const ways = ["north", "south", "east", "west"];

  handleI(input) {
    for(let i = 0; i <input.length; i++) {
      this.handle(input[i]);
    }

  }

	constructor() {
    this.coordinates = [0,0];
    this.bearing = 'north';
  }
  setCoordinates(x,y) {
    this.coordinates = [x,y];
  }
  setBearing(direction) {
    if ways.includes(bearing) {
      this.bearing = bearing;
    }else {
      return ("should handle an invalid robot bearing");
    }
  }
  place(position) {
    this.coordinates = [position.a, position.b]
    this.position = position.direction;
  }
  turnRight() {
    switch(this.bearing) {
      case 'north':
      this.bearing = 'east'
      break;
      case 'west':
      this.bearing = 'north'
      break;
      case 'east':
      this.bearing = 'south';
      break;
      case 'south':
      this.bearing = 'west';
      break;
    }
  }

  turnLeft() {
    switch(this.bearing) {
      case 'north':
      this.bearing = 'west';
      break;
      case 'west':
      this.bearing = 'south'
      break;
      case 'east':
      this.bearing = 'north';
      break;
      case 'south':
      this.bearing = 'east';
      break;
    }
  }

  advance() {
    switch(this.bearing){
    case 'north':
    this.coordinates[1]++
    break;
    case 'south':
    this.coordinates[1]--
    break;
    case 'east':
    this.coordinates[0]++
    break;
    case 'west':
    this.coordinates[1]--
    break;
  }
}

  handle(command) {
    switch(command) {
      case 'A'
      this.advance()
      break;
      case 'L'
      this.turnLeft()
      break;
      case 'R'
      this.turnRight()
      break;
    }

  }

}
