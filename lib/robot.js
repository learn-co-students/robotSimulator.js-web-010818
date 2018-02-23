class Robot {
	constructor(){
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  setCoordinates(x, y){
    this.coordinates = [x, y];
  }

  setBearing(bearing){
    let bearings = ['north', 'east', 'south', 'west'];
    if (bearings.includes(bearing)){
      this.bearing = bearing;
    } else {
      throw 'Invalid Robot Bearing';
    }
  }

  place(placeObj){
    this.bearing = placeObj.direction;
    this.coordinates = [placeObj.x, placeObj.y];
  }

  turnRight(){
    switch (this.bearing) {
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
      default:
        break;
    }
  }
  turnLeft(){
    switch (this.bearing) {
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
      default:
        break;
    }
  }
  advance(){
    switch (this.bearing) {
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
      default:
        break;
    }
  }
  translateInstructions(instructions){
    for (let i of instructions){
      switch (i) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'A':
          this.advance();
          break;
        default:
          break;
      }
    }
  }
}
